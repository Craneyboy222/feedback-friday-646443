import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { createThread, getThreads, getThreadById } from '../controllers/feedbackController';
import { submitResponse } from '../controllers/responseController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/feedback-threads', authMiddleware, getThreads);
router.post('/feedback-threads', authMiddleware, createThread);
router.get('/feedback-threads/:id', authMiddleware, getThreadById);
router.post('/feedback-responses', authMiddleware, submitResponse);

export default router;