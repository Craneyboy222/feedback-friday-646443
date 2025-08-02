export const EVENT_CONFIG = {
  eventSource: 'enterprise-app',
  logLevel: process.env.LOG_LEVEL || 'info', // Options: 'debug', 'info', 'warn', 'error'
  errorEmail: process.env.ERROR_NOTIFICATION_EMAIL || 'admin@example.com',
  enableTracing: true,
  tracingService: 'NewRelic'
};