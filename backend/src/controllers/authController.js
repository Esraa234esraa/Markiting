import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1d' });

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: 'Email already registered.' });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role: role || 'User' });
  return res.status(201).json({ message: 'Registration successful', user: { id: user._id, email: user.email } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = generateToken(user._id, user.role);
  req.session.userId = user._id;
  req.session.role = user.role;

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24
  });

  return res.json({
    message: 'Login successful',
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
};

export const logout = async (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
  });
};

export const me = async (req, res) => {
  res.json({ user: req.user });
};
