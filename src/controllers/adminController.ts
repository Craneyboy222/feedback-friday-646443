import { Request, Response } from 'express';

export const getAdminDashboard = async (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not Implemented' });
};

export const manageUsers = async (req: Request, res: Response) => {
  res.status(501).json({ message: 'Not Implemented' });
};