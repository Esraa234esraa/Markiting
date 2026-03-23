import express from 'express';
import { body } from 'express-validator';
import {
  changePassword,
  createUser,
  deleteUser,
  getUsers,
  updateProfile,
  updateUser
} from '../controllers/userController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';

const router = express.Router();

router.get('/', protect, authorize('Admin'), getUsers);
router.post(
  '/',
  protect,
  authorize('Admin'),
  [body('name').notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 }), body('role').isIn(['Admin', 'User'])],
  validate,
  createUser
);
router.put('/:id', protect, authorize('Admin'), updateUser);
router.delete('/:id', protect, authorize('Admin'), deleteUser);
router.put('/profile/me', protect, updateProfile);
router.put('/profile/password', protect, [body('newPassword').isLength({ min: 6 })], validate, changePassword);

export default router;
