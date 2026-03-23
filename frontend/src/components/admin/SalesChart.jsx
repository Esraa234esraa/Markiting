import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SalesChart = ({ data, title = 'Sales Trend' }) => (
  <div className="card">
    <h3>{title}</h3>
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data || []}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" stroke="#3454d1" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesChart;
