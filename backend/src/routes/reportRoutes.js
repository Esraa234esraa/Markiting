import express from 'express';
import { exportReports, getReports } from '../controllers/reportController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, authorize('Admin'), getReports);
router.get('/export', protect, authorize('Admin'), exportReports);

export default router;
