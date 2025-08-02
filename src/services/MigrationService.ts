import { Client } from 'pg';
import { migrations } from '../lib/migrations';

export class MigrationService {
  private client: Client;

  constructor() {
    this.client = new Client();
  }

  async migrate() {
    await this.client.connect();
    try {
      for (const migration of migrations) {
        await this.client.query(migration);
      }
    } catch (err) {
      console.error('Migration error:', err);
      throw err;
    } finally {
      await this.client.end();
    }
  }
}