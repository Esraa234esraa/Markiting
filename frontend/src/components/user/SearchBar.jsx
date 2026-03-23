const SearchBar = ({ value, onChange }) => (
  <input placeholder="Search products..." value={value} onChange={(e) => onChange(e.target.value)} />
);

export default SearchBar;
