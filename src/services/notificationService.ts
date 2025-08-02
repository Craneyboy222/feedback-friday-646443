import { Notification } from '../models/notification';
import { logger } from '../utils/logger';

export class NotificationService {
  async sendNotification(userId: number, message: string) {
    try {
      const newNotification = await Notification.create({ userId, message, read_status: false });
      logger.info('Notification sent successfully', { notificationId: newNotification.id });
      return newNotification;
    } catch (error) {
      logger.error('Error sending notification', { error });
      throw new Error('Notification sending failed');
    }
  }

  async markAsRead(notificationId: number) {
    try {
      const notification = await Notification.findByPk(notificationId);
      if (!notification) {
        throw new Error('Notification not found');
      }
      await notification.update({ read_status: true });
      logger.info('Notification marked as read', { notificationId });
    } catch (error) {
      logger.error('Error marking notification as read', { error });
      throw new Error('Could not mark notification as read');
    }
  }

  // Additional notification-related methods...
}