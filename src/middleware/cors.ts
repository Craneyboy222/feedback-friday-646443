import cors from 'cors';

export const corsMiddleware = cors({
  origin: 'https://yourdomain.com',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
});