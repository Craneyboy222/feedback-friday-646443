import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import { validateUserRegistration, validateUserLogin } from '../validators/userValidators';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

class UserService {
  static async register(req: Request, res: Response) {
    try {
      const { error } = validateUserRegistration(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const { username, email, password } = req.body;
      const client = await pool.connect();
      const userExists = await client.query('SELECT * FROM Users WHERE email = $1', [email]);

      if (userExists.rowCount > 0) {
        client.release();
        return res.status(409).json({ message: 'Email already registered.' });
      }

      const passwordHash = await bcrypt.hash(password, saltRounds);
      const result = await client.query(
        'INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
        [username, email, passwordHash]
      );

      client.release();

      const token = jwt.sign(
        { id: result.rows[0].id, email: result.rows[0].email },
        jwtSecret,
        { expiresIn: '1h' }
      );

      return res.status(201).json({ token, user: result.rows[0] });
    } catch (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ message: 'An error occurred during registration.' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { error } = validateUserLogin(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const { email, password } = req.body;
      const client = await pool.connect();
      const userResult = await client.query('SELECT * FROM Users WHERE email = $1', [email]);

      if (userResult.rowCount === 0) {
        client.release();
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      const user = userResult.rows[0];
      const match = await bcrypt.compare(password, user.password_hash);
      client.release();

      if (!match) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        jwtSecret,
        { expiresIn: '1h' }
      );

      return res.status(200).json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (err) {
      console.error('Error logging in user:', err);
      return res.status(500).json({ message: 'An error occurred during login.' });
    }
  }
}

export default UserService;
