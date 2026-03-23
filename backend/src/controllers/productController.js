import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  const { search = '', category } = req.query;
  const query = {
    name: { $regex: search, $options: 'i' }
  };
  if (category) query.category = category;

  const products = await Product.find(query).sort({ createdAt: -1 });
  res.json(products);
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted successfully' });
};
