import express from 'express';
import { getNotifications, markNotificationAsRead } from '../controllers/notificationController';

const router = express.Router();

router.get('/', getNotifications);
router.put('/:id', markNotificationAsRead);

export default router;