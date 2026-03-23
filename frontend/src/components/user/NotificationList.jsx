const NotificationList = ({ notifications = [], onRead }) => (
  <div className="card">
    <h3>Notifications</h3>
    {notifications.map((note) => (
      <div key={note._id} style={{ marginBottom: 12 }}>
        <strong>{note.title}</strong>
        <p>{note.message}</p>
        {!note.isRead && (
          <button className="btn btn-primary" type="button" onClick={() => onRead(note._id)}>
            Mark as Read
          </button>
        )}
      </div>
    ))}
  </div>
);

export default NotificationList;
