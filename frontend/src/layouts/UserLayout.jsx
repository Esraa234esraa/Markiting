import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserLayout = () => {
  const { logout, user } = useAuth();

  return (
    <div className="shell">
      <aside className="sidebar">
        <h2>Smart Store</h2>
        <p className="sidebar-role">User Panel</p>
        <nav>
          <NavLink to="/user/dashboard">Dashboard</NavLink>
          <NavLink to="/user/products">Products</NavLink>
          <NavLink to="/user/chatbot">AI Chat Bot</NavLink>
          <NavLink to="/user/profile">Profile</NavLink>
          <NavLink to="/user/notifications">Notifications</NavLink>
        </nav>
        <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      </aside>
      <main className="content">
        <header className="topbar">
          <h1>Hello, {user?.name}</h1>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
