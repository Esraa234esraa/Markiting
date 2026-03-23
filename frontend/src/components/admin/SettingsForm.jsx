import { useEffect, useState } from 'react';
import NotificationToggle from './NotificationToggle';

const SettingsForm = ({ settings, onSave }) => {
  const [form, setForm] = useState(settings);

  useEffect(() => {
    setForm(settings);
  }, [settings]);

  if (!form) return null;

  return (
    <form
      className="card"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(form);
      }}
    >
      <h3>Company Settings</h3>
      <div className="grid-2">
        <input value={form.companyName || ''} onChange={(e) => setForm({ ...form, companyName: e.target.value })} />
        <input value={form.companyEmail || ''} onChange={(e) => setForm({ ...form, companyEmail: e.target.value })} />
      </div>
      <NotificationToggle
        label="Low stock notifications"
        checked={!!form.lowStockNotifications}
        onChange={(value) => setForm({ ...form, lowStockNotifications: value })}
      />
      <NotificationToggle
        label="Sales digest notifications"
        checked={!!form.salesDigestNotifications}
        onChange={(value) => setForm({ ...form, salesDigestNotifications: value })}
      />
      <button className="btn btn-primary" type="submit">
        Save Settings
      </button>
    </form>
  );
};

export default SettingsForm;
