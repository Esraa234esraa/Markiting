import express from 'express';
import { getAdminDashboard, getUserDashboard } from '../controllers/dashboardController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/admin', protect, authorize('Admin'), getAdminDashboard);
router.get('/user', protect, getUserDashboard);

export default router;
