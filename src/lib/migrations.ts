export const migrations = [
  `CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    profile_info JSONB
  )`,
  `CREATE TABLE IF NOT EXISTS FeedbackThreads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    company_name VARCHAR(255),
    url TEXT,
    purpose TEXT,
    technologies TEXT,
    feedback_requested TEXT,
    seeking_beta_testers BOOLEAN,
    additional_comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  // Add more table creation queries here
];