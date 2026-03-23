import express from 'express';
import { createNotification, getNotifications, markAsRead } from '../controllers/notificationController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getNotifications);
router.post('/', protect, authorize('Admin'), createNotification);
router.put('/:id/read', protect, markAsRead);

export default router;
