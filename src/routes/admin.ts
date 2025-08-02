import express, { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { verifyAdminToken } from '../middleware/auth';
import { logError } from '../middleware/logger';
import { getUsers, getFeedbackThreads, deleteFeedbackThread } from '../controllers/adminController';

const router = express.Router();

// Middleware for admin authentication
router.use(verifyAdminToken);

// Error handling middleware
const handleErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Get all users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all feedback threads
router.get('/feedback-threads', async (req: Request, res: Response) => {
  try {
    const threads = await getFeedbackThreads();
    res.status(200).json(threads);
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a feedback thread
router.delete('/feedback-threads/:id', [
  param('id').isUUID().withMessage('Invalid feedback thread ID'),
  handleErrors
], async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteFeedbackThread(id);
    res.status(204).send();
  } catch (error) {
    logError(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
