import { useEffect, useState } from 'react';
import { userApi } from '../../api/api';
import UserForm from '../../components/admin/UserForm';
import UserTable from '../../components/admin/UserTable';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadUsers = () => userApi.list().then((res) => setUsers(res.data));

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (payload) => {
    if (payload._id) await userApi.update(payload._id, payload);
    else await userApi.create(payload);
    setSelected(null);
    loadUsers();
  };

  const handleDelete = async (id) => {
    await userApi.remove(id);
    loadUsers();
  };

  return (
    <div className="page-card">
      <h2>Users Management</h2>
      <UserForm selected={selected} onSubmit={handleSubmit} />
      <UserTable users={users} onEdit={setSelected} onDelete={handleDelete} />
    </div>
  );
};

export default AdminUsersPage;
