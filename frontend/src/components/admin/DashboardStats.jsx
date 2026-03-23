const DashboardStats = ({ stats }) => {
  const cards = [
    { label: 'Total Sales', value: `$${(stats?.totalSales || 0).toFixed(2)}` },
    { label: 'Total Products', value: stats?.totalProducts || 0 },
    { label: 'Low Stock Alerts', value: stats?.lowStockCount || 0 }
  ];

  return (
    <div className="grid-3">
      {cards.map((item) => (
        <div className="card" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
