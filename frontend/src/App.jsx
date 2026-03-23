import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminChatMonitorPage from './pages/admin/AdminChatMonitorPage';
import AdminReportsPage from './pages/admin/AdminReportsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import UserDashboardPage from './pages/user/UserDashboardPage';
import UserProductsPage from './pages/user/UserProductsPage';
import UserChatBotPage from './pages/user/UserChatBotPage';
import UserProfilePage from './pages/user/UserProfilePage';
import UserNotificationsPage from './pages/user/UserNotificationsPage';

const Unauthorized = () => <div className="centered-page">Unauthorized access</div>;

const HomeRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return user.role === 'Admin' ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/user/dashboard" replace />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="chatbot-monitor" element={<AdminChatMonitorPage />} />
          <Route path="reports" element={<AdminReportsPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['User', 'Admin']} />}>
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboardPage />} />
          <Route path="products" element={<UserProductsPage />} />
          <Route path="chatbot" element={<UserChatBotPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="notifications" element={<UserNotificationsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
