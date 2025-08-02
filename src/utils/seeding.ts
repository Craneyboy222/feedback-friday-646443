import { query } from './database';

export const seedDatabase = async () => {
  try {
    await query(`
      INSERT INTO Users (username, email, password_hash, profile_info) VALUES
      ('john_doe', 'john@example.com', 'hashed_password', '{"bio": "Software developer"}'),
      ('jane_doe', 'jane@example.com', 'hashed_password', '{"bio": "Product manager"}');

      INSERT INTO FeedbackThreads (user_id, company_name, url, purpose, technologies, feedback_requested, seeking_beta_testers, additional_comments) VALUES
      (1, 'Company A', 'http://companya.com', 'Improve UI', '{"React", "Node.js"}', true, false, 'Looking for feedback on UI/UX');

      INSERT INTO FeedbackResponses (thread_id, user_id, response_text) VALUES
      (1, 2, 'Great interface, but could use more contrast.');
    `);
    console.log('Database has been successfully seeded.');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};