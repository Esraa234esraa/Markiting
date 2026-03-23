import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AnalyticsChart = ({ data }) => (
  <div className="card">
    <h3>Sales Analytics</h3>
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data || []}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#3454d1" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default AnalyticsChart;
