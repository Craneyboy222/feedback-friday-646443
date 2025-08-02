import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/security';
import { User } from '../types/auth';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = (user: User): string => {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
};

export const getUserById = async (id: string): Promise<User | null> => {
  // Database lookup for user by ID
  return null; // Placeholder
};