import { Pool } from 'pg';
import { User } from '../models/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository<User> {
  constructor(pool: Pool) {
    super(pool, 'Users');
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const result = await this.pool.query('SELECT * FROM Users WHERE email = $1', [email]);
      return result.rows[0] ? result.rows[0] : null;
    } catch (error) {
      console.error('Error finding user by email', error);
      throw new Error('Database query error');
    }
  }

  async create(user: User): Promise<void> {
    try {
      await this.pool.query('INSERT INTO Users (username, email, password_hash, profile_info) VALUES ($1, $2, $3, $4)',
        [user.username, user.email, user.password_hash, user.profile_info]);
    } catch (error) {
      console.error('Error creating user', error);
      throw new Error('Database query error');
    }
  }
}