import { useEffect, useState } from 'react';
import { dashboardApi } from '../../api/api';
import DashboardStats from '../../components/admin/DashboardStats';
import SalesChart from '../../components/admin/SalesChart';
import ActivityFeed from '../../components/admin/ActivityFeed';

const AdminDashboardPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    dashboardApi.admin().then((res) => setData(res.data));
  }, []);

  return (
    <div className="page-card">
      <h2>Admin Dashboard</h2>
      <DashboardStats stats={data?.stats} />
      <div className="grid-2" style={{ marginTop: 12 }}>
        <SalesChart data={data?.trends?.daily} title="Daily Sales" />
        <ActivityFeed activity={data?.activity} />
      </div>
      <div className="grid-2" style={{ marginTop: 12 }}>
        <SalesChart data={data?.trends?.weekly} title="Weekly Sales" />
        <SalesChart data={data?.trends?.monthly} title="Monthly Sales" />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
