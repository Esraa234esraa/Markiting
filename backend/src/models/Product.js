import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, min: 0 },
    minStockLevel: { type: Number, default: 10 },
    description: { type: String, default: '' },
    tags: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
