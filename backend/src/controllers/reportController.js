import Product from '../models/Product.js';
import Sale from '../models/Sale.js';

export const getReports = async (_, res) => {
  const [products, sales] = await Promise.all([Product.find(), Sale.find().sort({ createdAt: -1 }).limit(200)]);
  const inventoryReport = products.map((product) => ({
    name: product.name,
    sku: product.sku,
    stock: product.stock,
    status: product.stock <= product.minStockLevel ? 'Low Stock' : 'Healthy'
  }));

  const salesReport = sales.map((sale) => ({
    id: sale._id,
    total: sale.totalPrice,
    createdAt: sale.createdAt
  }));

  res.json({ inventoryReport, salesReport });
};

export const exportReports = async (_, res) => {
  const sales = await Sale.find().sort({ createdAt: -1 }).limit(300);
  const csvRows = ['id,total,createdAt'];
  sales.forEach((sale) => {
    csvRows.push(`${sale._id},${sale.totalPrice},${sale.createdAt.toISOString()}`);
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="sales-report.csv"');
  res.send(csvRows.join('\n'));
};
