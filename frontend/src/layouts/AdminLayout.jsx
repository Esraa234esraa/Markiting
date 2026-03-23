import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminLayout = () => {
  const { logout, user } = useAuth();

  return (
    <div className="shell">
      <aside className="sidebar">
        <h2>Smart Store</h2>
        <p className="sidebar-role">Admin Panel</p>
        <nav>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/products">Products</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/chatbot-monitor">AI Monitor</NavLink>
          <NavLink to="/admin/reports">Reports</NavLink>
          <NavLink to="/admin/settings">Settings</NavLink>
        </nav>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      </aside>
      <main className="content">
        <header className="topbar">
          <h1>Welcome, {user?.name}</h1>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
