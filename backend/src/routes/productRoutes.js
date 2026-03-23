import express from 'express';
import { body } from 'express-validator';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.get('/', protect, getProducts);
router.post(
  '/',
  protect,
  authorize('Admin'),
  [body('name').notEmpty(), body('sku').notEmpty(), body('price').isFloat({ min: 0 }), body('stock').isInt({ min: 0 })],
  validate,
  createProduct
);
router.put('/:id', protect, authorize('Admin'), updateProduct);
router.delete('/:id', protect, authorize('Admin'), deleteProduct);

export default router;
