import { Request } from 'express';

export const logSecurityEvent = (req: Request, event: string) => {
  console.log(`[${new Date().toISOString()}] ${event} - User: ${req.user?.id || 'Unknown'}`);
  // Additionally, save to a persistent log storage
};