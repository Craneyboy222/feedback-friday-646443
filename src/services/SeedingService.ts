import { DatabaseService } from './DatabaseService';

export class SeedingService {
  private db: DatabaseService;

  constructor() {
    this.db = new DatabaseService();
  }

  async seed() {
    try {
      await this.db.query('INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3)', ['admin', 'admin@example.com', 'hashed_password']);
      // Add more seeding logic here
    } catch (err) {
      console.error('Seeding error:', err);
      throw err;
    }
  }
}