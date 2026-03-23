import { useEffect, useState } from 'react';
import RoleSelector from './RoleSelector';

const initialForm = {
  name: '',
  email: '',
  password: '',
  role: 'User'
};

const UserForm = ({ selected, onSubmit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (selected) setForm({ ...selected, password: '' });
    else setForm(initialForm);
  }, [selected]);

  return (
    <form
      className="card"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(form);
      }}
    >
      <h3>{selected ? 'Edit User' : 'Add User'}</h3>
      <div className="grid-2">
        <input value={form.name} placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input value={form.email} placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        {!selected && (
          <input
            value={form.password}
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        )}
        <RoleSelector value={form.role} onChange={(role) => setForm({ ...form, role })} />
      </div>
      <button className="btn btn-primary" type="submit">
        Save User
      </button>
    </form>
  );
};

export default UserForm;
