import { query } from './database';

export const runMigrations = async () => {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        profile_info JSONB
      );

      CREATE TABLE IF NOT EXISTS FeedbackThreads (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES Users(id),
        company_name VARCHAR(255),
        url VARCHAR(255),
        purpose TEXT,
        technologies TEXT[],
        feedback_requested BOOLEAN,
        seeking_beta_testers BOOLEAN,
        additional_comments TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS FeedbackResponses (
        id SERIAL PRIMARY KEY,
        thread_id INTEGER REFERENCES FeedbackThreads(id),
        user_id INTEGER REFERENCES Users(id),
        response_text TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS Surveys (
        id SERIAL PRIMARY KEY,
        thread_id INTEGER REFERENCES FeedbackThreads(id),
        survey_link TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS PromoCodes (
        id SERIAL PRIMARY KEY,
        thread_id INTEGER REFERENCES FeedbackThreads(id),
        code VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS Notifications (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES Users(id),
        message TEXT,
        read_status BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Migrations have been successfully run.');
  } catch (error) {
    console.error('Error running migrations:', error);
    throw error;
  }
};