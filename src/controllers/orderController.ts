import { Request, Response } from 'express';

export const getAllOrders = async (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not Implemented' });
};

export const createOrder = async (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not Implemented' });
};