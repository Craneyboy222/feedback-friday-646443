import { Pool } from 'pg';
import { ConnectionPoolService } from './ConnectionPoolService';

export class DatabaseService {
  private pool: Pool;

  constructor() {
    this.pool = ConnectionPoolService.getPool();
  }

  async query(text: string, params: any[]) {
    const client = await this.pool.connect();
    try {
      const res = await client.query(text, params);
      return res;
    } catch (err) {
      console.error('Database query error:', err);
      throw err;
    } finally {
      client.release();
    }
  }

  async transaction(queries: Array<{ text: string, params: any[] }>) {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      for (let { text, params } of queries) {
        await client.query(text, params);
      }
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Transaction error:', err);
      throw err;
    } finally {
      client.release();
    }
  }
}