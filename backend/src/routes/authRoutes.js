import express from 'express';
import { body } from 'express-validator';
import { login, logout, me, register } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.post(
  '/register',
  [body('name').notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 })],
  validate,
  register
);
router.post('/login', [body('email').isEmail(), body('password').notEmpty()], validate, login);
router.post('/logout', logout);
router.get('/me', protect, me);

export default router;
