import { Pool } from 'pg';

export class AuditLogRepository {
  constructor(private pool: Pool) {}

  async logAction(action: string, userId: string): Promise<void> {
    try {
      await this.pool.query('INSERT INTO AuditLogs (action, user_id, created_at) VALUES ($1, $2, NOW())', [action, userId]);
    } catch (error) {
      console.error('Error logging action', error);
      throw new Error('Database query error');
    }
  }
}