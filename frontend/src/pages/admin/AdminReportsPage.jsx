import { useEffect, useState } from 'react';
import { dashboardApi, reportApi } from '../../api/api';
import ReportsTable from '../../components/admin/ReportsTable';
import ExportButton from '../../components/admin/ExportButton';
import AnalyticsChart from '../../components/admin/AnalyticsChart';

const AdminReportsPage = () => {
  const [salesReport, setSalesReport] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    reportApi.list().then((res) => setSalesReport(res.data.salesReport));
    dashboardApi.admin().then((res) => setAnalytics(res.data.trends.daily));
  }, []);

  const handleExport = async () => {
    const response = await reportApi.exportCsv();
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sales-report.csv');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="page-card">
      <h2>Reports</h2>
      <ExportButton onExport={handleExport} />
      <div style={{ marginTop: 12 }}>
        <AnalyticsChart data={analytics} />
      </div>
      <ReportsTable rows={salesReport} />
    </div>
  );
};

export default AdminReportsPage;
