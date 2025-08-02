import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Database pool
const pool = new Pool({
  user: 'your-user',
  host: 'localhost',
  database: 'your-database',
  password: 'your-password',
  port: 5432,
});

// JWT secret
const JWT_SECRET = 'your-jwt-secret';

// User Registration
export const register = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const { rows } = await pool.query('INSERT INTO Users (id, username, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id', [uuidv4(), username, email, hashedPassword]);
      const token = jwt.sign({ userId: rows[0].id }, JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } catch (error) {
      console.error('Error registering user:', error);
      return res.status(500).send('Server error');
    }
  }
];

// User Authentication
export const login = [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').exists().withMessage('Password is required'),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const { rows } = await pool.query('SELECT id, password_hash FROM Users WHERE email = $1', [email]);
      if (rows.length === 0) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      const isMatch = await bcrypt.compare(password, rows[0].password_hash);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }
      const token = jwt.sign({ userId: rows[0].id }, JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).send('Server error');
    }
  }
];

// Error handling middleware
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
};

// Example middleware for authentication
export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};