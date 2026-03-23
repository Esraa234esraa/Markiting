import { useEffect, useState } from 'react';
import { notificationApi } from '../../api/api';
import NotificationList from '../../components/user/NotificationList';

const UserNotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const load = () => notificationApi.list().then((res) => setNotifications(res.data));

  useEffect(() => {
    load();
  }, []);

  const handleRead = async (id) => {
    await notificationApi.read(id);
    load();
  };

  return (
    <div className="page-card">
      <h2>Notifications</h2>
      <NotificationList notifications={notifications} onRead={handleRead} />
    </div>
  );
};

export default UserNotificationsPage;