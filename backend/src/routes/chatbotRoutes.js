import express from 'express';
import { body } from 'express-validator';
import { askChatBot, getChatLogs } from '../controllers/chatbotController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.post('/ask', protect, [body('query').isLength({ min: 2 })], validate, askChatBot);
router.get('/logs', protect, authorize('Admin'), getChatLogs);

export default router;
