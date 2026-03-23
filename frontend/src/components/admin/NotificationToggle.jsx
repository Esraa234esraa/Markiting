const NotificationToggle = ({ label, checked, onChange }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    {label}
  </label>
);

export default NotificationToggle;
