import jwt from 'jsonwebtoken';
import { UNAUTHORIZED } from './errors';

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(UNAUTHORIZED);
      }
      req.user = user;
      next();
    });
  } else {
    next(UNAUTHORIZED);
  }
};
