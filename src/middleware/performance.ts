import express from 'express';
import { cacheData, getCachedData } from '../services/cache';

const performanceMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const key = req.originalUrl;

  getCachedData(key).then(cachedResponse => {
    if (cachedResponse) {
      res.send(cachedResponse);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        cacheData(key, body, 3600); // Cache for 1 hour
        res.sendResponse(body);
      };
      next();
    }
  });
};

export default performanceMiddleware;