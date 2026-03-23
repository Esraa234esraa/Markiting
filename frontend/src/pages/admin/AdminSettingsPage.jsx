import { useEffect, useState } from 'react';
import { settingsApi } from '../../api/api';
import SettingsForm from '../../components/admin/SettingsForm';

const AdminSettingsPage = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    settingsApi.get().then((res) => setSettings(res.data));
  }, []);

  const handleSave = async (payload) => {
    const { data } = await settingsApi.update(payload);
    setSettings(data);
  };

  return (
    <div className="page-card">
      <h2>Settings</h2>
      <SettingsForm settings={settings} onSave={handleSave} />
    </div>
  );
};

export default AdminSettingsPage;
