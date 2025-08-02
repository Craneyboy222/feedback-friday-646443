import { Request, Response, NextFunction } from 'express';
import { Users } from '../models';

// Admin business logic with role-based access
export class AdminService {
  static async manageUserRoles(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, role } = req.body;
      const user = await Users.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.role = role;
      await user.save();
      res.status(200).json({ message: 'User role updated successfully' });
    } catch (error) {
      console.error('Error updating user role', error);
      next(error);
    }
  }

  static async fetchAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await Users.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users', error);
      next(error);
    }
  }
}