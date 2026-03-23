import Sale from '../models/Sale.js';
import Product from '../models/Product.js';

export const getSales = async (req, res) => {
  const sales = await Sale.find()
    .populate('product', 'name sku')
    .populate('soldBy', 'name email')
    .sort({ createdAt: -1 });
  res.json(sales);
};

export const createSale = async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.stock < quantity) return res.status(400).json({ message: 'Insufficient stock' });

  product.stock -= quantity;
  await product.save();

  const sale = await Sale.create({
    product: product._id,
    quantity,
    unitPrice: product.price,
    totalPrice: product.price * quantity,
    soldBy: req.user._id
  });

  const populated = await sale.populate('product', 'name sku');
  res.status(201).json(populated);
};
