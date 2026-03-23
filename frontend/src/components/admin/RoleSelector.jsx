const RoleSelector = ({ value, onChange }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="User">User</option>
    <option value="Admin">Admin</option>
  </select>
);

export default RoleSelector;
