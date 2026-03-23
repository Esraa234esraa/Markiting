import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const UserSalesChart = ({ data }) => (
  <div className="card">
    <h3>Performance Trends</h3>
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data || []}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#3454d1" fill="#e8ecff" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default UserSalesChart;
