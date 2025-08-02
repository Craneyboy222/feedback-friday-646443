/* Order management service */

import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import { Order, OrderItem } from '../types';
import { validateOrder, validateOrderItem } from '../validators/orderValidators';
import { logger } from '../utils/logger';

const pool = new Pool();

// Middleware for authenticating and authorizing an order action
async function authenticateOrderRequest(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error('Error in authenticateOrderRequest', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

// Service to create a new order
export async function createOrder(req: Request, res: Response) {
  try {
    const { error } = validateOrder(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { userId, items } = req.body;
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const orderResult = await client.query(
        'INSERT INTO Orders(user_id, created_at) VALUES($1, NOW()) RETURNING id',
        [userId]
      );
      const orderId = orderResult.rows[0].id;

      for (const item of items) {
        const { error: itemError } = validateOrderItem(item);
        if (itemError) {
          await client.query('ROLLBACK');
          return res.status(400).json({ error: itemError.details[0].message });
        }
        await client.query(
          'INSERT INTO OrderItems(order_id, product_id, quantity, price) VALUES($1, $2, $3, $4)',
          [orderId, item.productId, item.quantity, item.price]
        );
      }

      await client.query('COMMIT');
      res.status(201).json({ orderId });
    } catch (error) {
      await client.query('ROLLBACK');
      logger.error('Error creating order', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      client.release();
    }
  } catch (error) {
    logger.error('Error in createOrder', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Service to retrieve an order
export async function getOrder(req: Request, res: Response) {
  try {
    const orderId = parseInt(req.params.id, 10);
    if (isNaN(orderId)) {
      return res.status(400).json({ error: 'Invalid order ID' });
    }

    const client = await pool.connect();
    try {
      const orderResult = await client.query(
        'SELECT * FROM Orders WHERE id = $1',
        [orderId]
      );
      const order = orderResult.rows[0];

      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      const itemsResult = await client.query(
        'SELECT * FROM OrderItems WHERE order_id = $1',
        [orderId]
      );

      const items = itemsResult.rows;

      res.status(200).json({ order, items });
    } catch (error) {
      logger.error('Error retrieving order', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      client.release();
    }
  } catch (error) {
    logger.error('Error in getOrder', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
