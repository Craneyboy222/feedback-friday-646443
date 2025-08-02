import { Pool } from 'pg';

const pool = new Pool();

beforeAll(async () => {
  await pool.query('CREATE TABLE IF NOT EXISTS Users (id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE, email VARCHAR(255) UNIQUE, password_hash TEXT, profile_info JSON)');
  await pool.query('CREATE TABLE IF NOT EXISTS FeedbackThreads (id SERIAL PRIMARY KEY, user_id INT, company_name VARCHAR(255), url TEXT, purpose TEXT, technologies TEXT, feedback_requested BOOLEAN, seeking_beta_testers BOOLEAN, additional_comments TEXT, created_at TIMESTAMP DEFAULT NOW())');
});

afterAll(async () => {
  await pool.query('DROP TABLE IF EXISTS Users');
  await pool.query('DROP TABLE IF EXISTS FeedbackThreads');
  await pool.end();
});