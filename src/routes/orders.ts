import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { verifyToken } from '../middleware/auth';
import { Order } from '../models/order';
import { logger } from '../utils/logger';

const router = express.Router();

// Middleware for error handling
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
};

// Validate order ID
const validateOrderId = param('orderId').isUUID().withMessage('Invalid order ID format');

// Validate order data
const validateOrderData = [
  body('productId').isUUID().withMessage('Product ID must be a valid UUID'),
  body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
  body('shippingAddress').isString().isLength({ min: 5 }).withMessage('Shipping address must be at least 5 characters long')
];

// GET /api/orders - Retrieve all orders
router.get('/', verifyToken, async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    errorHandler(error, req, res, null);
  }
});

// GET /api/orders/:orderId - Retrieve specific order
router.get('/:orderId', verifyToken, validateOrderId, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const order = await Order.findByPk(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    errorHandler(error, req, res, null);
  }
});

// POST /api/orders - Create a new order
router.post('/', verifyToken, validateOrderData, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { productId, quantity, shippingAddress } = req.body;
    const newOrder = await Order.create({ productId, quantity, shippingAddress, userId: req.user.id });
    res.status(201).json(newOrder);
  } catch (error) {
    errorHandler(error, req, res, null);
  }
});

// PUT /api/orders/:orderId - Update an existing order
router.put('/:orderId', verifyToken, validateOrderId, validateOrderData, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const order = await Order.findByPk(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    const { productId, quantity, shippingAddress } = req.body;
    order.productId = productId;
    order.quantity = quantity;
    order.shippingAddress = shippingAddress;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    errorHandler(error, req, res, null);
  }
});

// DELETE /api/orders/:orderId - Delete an order
router.delete('/:orderId', verifyToken, validateOrderId, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const order = await Order.findByPk(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    errorHandler(error, req, res, null);
  }
});

export default router;