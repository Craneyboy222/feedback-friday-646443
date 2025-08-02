import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

// Use morgan for logging HTTP requests
const loggerFormat = ':method :url :status :res[content-length] - :response-time ms';

export const loggingMiddleware = morgan(loggerFormat, {
  skip: (req: Request, res: Response) => res.statusCode < 400,
  stream: process.stdout,
});