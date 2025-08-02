/* Environment variables */
import dotenv from 'dotenv';
dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
export const DATABASE_URL = process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/feedback_platform';
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || '';
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY || '';