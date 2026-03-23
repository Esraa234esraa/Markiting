import Product from '../models/Product.js';
import Sale from '../models/Sale.js';

const mapActionReason = (product, soldQty) => {
  if (product.stock <= product.minStockLevel) {
    return {
      action: 'RESTOCK',
      reason: `${product.name} is below minimum stock level`,
      confidence: 0.92
    };
  }
  if (soldQty > product.stock * 0.6) {
    return {
      action: 'BUY',
      reason: `${product.name} demand is high compared to available stock`,
      confidence: 0.84
    };
  }
  return {
    action: 'PROMOTE',
    reason: `${product.name} has sufficient stock and can be promoted`,
    confidence: 0.72
  };
};

export const generateSuggestions = async () => {
  const [products, recentSales] = await Promise.all([
    Product.find().lean(),
    Sale.find({ createdAt: { $gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) } })
      .populate('product', 'name')
      .lean()
  ]);

  const salesByProduct = recentSales.reduce((acc, sale) => {
    const id = sale.product?._id?.toString();
    if (!id) return acc;
    acc[id] = (acc[id] || 0) + sale.quantity;
    return acc;
  }, {});

  return products.slice(0, 10).map((product) => {
    const soldQty = salesByProduct[product._id.toString()] || 0;
    const recommendation = mapActionReason(product, soldQty);
    return {
      productId: product._id,
      productName: product.name,
      soldQty,
      currentStock: product.stock,
      ...recommendation
    };
  });
};
