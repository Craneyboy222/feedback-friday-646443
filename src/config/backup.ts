export const BACKUP_CONFIG = {
  frequency: 'daily', // Options: 'hourly', 'daily', 'weekly'
  retentionPeriod: 30, // Retain backups for 30 days
  storage: 's3',
  s3Bucket: process.env.BACKUP_S3_BUCKET || 'enterprise-app-backups',
  encryption: 'AES-256',
  notificationEmail: process.env.BACKUP_NOTIFICATION_EMAIL || 'admin@example.com'
};