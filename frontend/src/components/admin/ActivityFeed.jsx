const ActivityFeed = ({ activity = [] }) => (
  <div className="card">
    <h3>Recent Activity</h3>
    {activity.length === 0 && <p>No recent activity.</p>}
    <ul>
      {activity.map((item) => (
        <li key={item.id}>
          <strong>{item.title}</strong> - {item.description}
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
