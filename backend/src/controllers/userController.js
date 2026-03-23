import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const getUsers = async (_, res) => {
  const users = await User.find().select('-password').sort({ createdAt: -1 });
  res.json(users);
};

export const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'Email already used' });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role });
  res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role });
};

export const updateUser = async (req, res) => {
  const { name, email, role } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, { name, email, role }, { new: true }).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted successfully' });
};

export const updateProfile = async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(req.user._id, { name, email }, { new: true }).select('-password');
  res.json(user);
};

export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);
  const valid = await bcrypt.compare(currentPassword, user.password);
  if (!valid) return res.status(400).json({ message: 'Current password is incorrect' });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();
  res.json({ message: 'Password updated successfully' });
};
