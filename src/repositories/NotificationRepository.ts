import { Pool } from 'pg';
import { Notification } from '../models/Notification';
import { BaseRepository } from './BaseRepository';

export class NotificationRepository extends BaseRepository<Notification> {
  constructor(pool: Pool) {
    super(pool, 'Notifications');
  }

  async findByUserId(userId: string): Promise<Notification[]> {
    try {
      const result = await this.pool.query('SELECT * FROM Notifications WHERE user_id = $1', [userId]);
      return result.rows;
    } catch (error) {
      console.error('Error finding notifications by user id', error);
      throw new Error('Database query error');
    }
  }

  async markAsRead(notificationId: string): Promise<void> {
    try {
      await this.pool.query('UPDATE Notifications SET read_status = true WHERE id = $1', [notificationId]);
    } catch (error) {
      console.error('Error marking notification as read', error);
      throw new Error('Database query error');
    }
  }
}