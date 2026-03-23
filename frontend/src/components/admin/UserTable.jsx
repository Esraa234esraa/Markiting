const UserTable = ({ users, onEdit, onDelete }) => (
  <div className="card">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button className="btn btn-primary" type="button" onClick={() => onEdit(user)}>
                Edit
              </button>{' '}
              <button className="btn btn-danger" type="button" onClick={() => onDelete(user._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
