import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Sale from '../models/Sale.js';

dotenv.config();

const runSeed = async () => {
  await connectDB();
  await Promise.all([User.deleteMany(), Product.deleteMany(), Sale.deleteMany()]);

  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const userPassword = await bcrypt.hash('User123!', 10);

  const [admin, user] = await User.create([
    { name: 'Admin User', email: 'admin@smartstore.com', password: adminPassword, role: 'Admin' },
    { name: 'Store User', email: 'user@smartstore.com', password: userPassword, role: 'User' }
  ]);

  const products = await Product.create([
    { name: 'Wireless Mouse', sku: 'PRD-1001', category: 'Electronics', price: 25, stock: 15, minStockLevel: 10 },
    { name: 'Notebook Pack', sku: 'PRD-1002', category: 'Stationery', price: 12, stock: 80, minStockLevel: 25 },
    { name: 'Water Bottle', sku: 'PRD-1003', category: 'Lifestyle', price: 18, stock: 8, minStockLevel: 12 }
  ]);

  await Sale.create([
    { product: products[0]._id, quantity: 3, unitPrice: 25, totalPrice: 75, soldBy: user._id },
    { product: products[2]._id, quantity: 2, unitPrice: 18, totalPrice: 36, soldBy: admin._id }
  ]);

  console.log('Seed data inserted.');
  await mongoose.connection.close();
};

runSeed();