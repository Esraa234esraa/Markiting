const FilterPanel = ({ category, onChange }) => (
  <select value={category} onChange={(e) => onChange(e.target.value)}>
    <option value="">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Stationery">Stationery</option>
    <option value="Lifestyle">Lifestyle</option>
  </select>
);

export default FilterPanel;
