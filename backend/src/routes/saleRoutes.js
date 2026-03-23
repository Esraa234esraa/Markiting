import express from 'express';
import { body } from 'express-validator';
import { createSale, getSales } from '../controllers/saleController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.get('/', protect, getSales);
router.post('/', protect, [body('productId').notEmpty(), body('quantity').isInt({ min: 1 })], validate, createSale);

export default router;
