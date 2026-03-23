const UserDashboardStats = ({ stats }) => (
  <div className="grid-2">
    <div className="card">
      <p>Personal Sales</p>
      <h2>${(stats?.personalSales || 0).toFixed(2)}</h2>
    </div>
    <div className="card">
      <p>Total Transactions</p>
      <h2>{stats?.totalTransactions || 0}</h2>
    </div>
  </div>
);

export default UserDashboardStats;
