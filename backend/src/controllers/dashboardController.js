import Product from '../models/Product.js';
import Sale from '../models/Sale.js';

const buildSeries = (sales, days = 7) => {
  const now = new Date();
  const map = {};
  for (let i = days - 1; i >= 0; i -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const key = date.toISOString().slice(0, 10);
    map[key] = 0;
  }

  sales.forEach((sale) => {
    const key = new Date(sale.createdAt).toISOString().slice(0, 10);
    if (key in map) map[key] += sale.totalPrice;
  });

  return Object.entries(map).map(([date, value]) => ({ date, value }));
};

export const getAdminDashboard = async (_, res) => {
  const [products, sales] = await Promise.all([Product.find(), Sale.find().sort({ createdAt: -1 }).limit(120)]);
  const totalSales = sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
  const lowStock = products.filter((p) => p.stock <= p.minStockLevel);

  res.json({
    stats: {
      totalSales,
      totalProducts: products.length,
      lowStockCount: lowStock.length
    },
    trends: {
      daily: buildSeries(sales, 7),
      weekly: buildSeries(sales, 28),
      monthly: buildSeries(sales, 90)
    },
    activity: sales.slice(0, 10).map((sale) => ({
      id: sale._id,
      title: `Sale completed`,
      description: `Amount: $${sale.totalPrice.toFixed(2)}`,
      createdAt: sale.createdAt
    }))
  });
};

export const getUserDashboard = async (req, res) => {
  const sales = await Sale.find({ soldBy: req.user._id }).sort({ createdAt: -1 });
  const personalSales = sales.reduce((sum, sale) => sum + sale.totalPrice, 0);

  res.json({
    stats: {
      personalSales,
      totalTransactions: sales.length
    },
    trends: buildSeries(sales, 30)
  });
};
