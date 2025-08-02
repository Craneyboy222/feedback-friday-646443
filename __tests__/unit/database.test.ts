import { Pool } from 'pg';
import { UserService } from '../services/UserService';

const pool = new Pool();

beforeAll(async () => {
  await pool.query('CREATE TABLE IF NOT EXISTS Users (id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE, email VARCHAR(255) UNIQUE, password_hash TEXT, profile_info JSON)');
});

describe('UserService', () => {
  it('should create a new user', async () => {
    const userService = new UserService(pool);
    const user = await userService.createUser('testuser', 'test@example.com', 'hashed-password');
    expect(user).toHaveProperty('id');
    expect(user.username).toBe('testuser');
  });

  it('should not create a user with duplicate email', async () => {
    const userService = new UserService(pool);
    await userService.createUser('testuser2', 'test2@example.com', 'hashed-password');
    await expect(userService.createUser('testuser3', 'test2@example.com', 'hashed-password')).rejects.toThrow();
  });
});

afterAll(async () => {
  await pool.query('DROP TABLE IF EXISTS Users');
  await pool.end();
});