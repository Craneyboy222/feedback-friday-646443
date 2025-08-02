import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';

interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  profile_info: string;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const TOKEN_EXPIRY = '1h';

export class AuthService {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await pool.query(
        'INSERT INTO Users (username, email, password_hash, profile_info) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, email, hashedPassword, '']
      );

      const user: User = result.rows[0];

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRY,
      });

      res.status(201).json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
      }

      const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
      const user: User = result.rows[0];

      if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRY,
      });

      res.status(200).json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
      console.error('Error during user authentication:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  }

  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access denied, no token provided.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token.' });
      }
      req.user = decoded;
      next();
    });
  }
}
