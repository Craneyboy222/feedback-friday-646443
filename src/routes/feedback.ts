import express from 'express';
import { getAllFeedbackThreads, createFeedbackThread, getFeedbackThreadById, submitFeedbackResponse } from '../controllers/feedbackController';

const router = express.Router();

router.get('/', getAllFeedbackThreads);
router.post('/', createFeedbackThread);
router.get('/:id', getFeedbackThreadById);
router.post('/responses', submitFeedbackResponse);

export default router;