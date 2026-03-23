import { useEffect, useState } from 'react';
import { dashboardApi } from '../../api/api';
import UserDashboardStats from '../../components/user/UserDashboardStats';
import UserSalesChart from '../../components/user/UserSalesChart';

const UserDashboardPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    dashboardApi.user().then((res) => setData(res.data));
  }, []);

  return (
    <div className="page-card">
      <h2>User Dashboard</h2>
      <UserDashboardStats stats={data?.stats} />
      <div style={{ marginTop: 12 }}>
        <UserSalesChart data={data?.trends} />
      </div>
    </div>
  );
};

export default UserDashboardPage;
