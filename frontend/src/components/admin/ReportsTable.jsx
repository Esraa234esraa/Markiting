const ReportsTable = ({ rows = [] }) => (
  <div className="card">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Total</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>${row.total}</td>
            <td>{new Date(row.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ReportsTable;
