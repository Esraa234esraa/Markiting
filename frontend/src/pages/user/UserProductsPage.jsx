import { useEffect, useState } from 'react';
import { productApi } from '../../api/api';
import ProductCard from '../../components/user/ProductCard';
import SearchBar from '../../components/user/SearchBar';
import FilterPanel from '../../components/user/FilterPanel';

const UserProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    productApi.list({ search, category }).then((res) => setProducts(res.data));
  }, [search, category]);

  return (
    <div className="page-card">
      <h2>Browse Products</h2>
      <div className="grid-2">
        <SearchBar value={search} onChange={setSearch} />
        <FilterPanel category={category} onChange={setCategory} />
      </div>
      <div className="grid-3" style={{ marginTop: 12 }}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default UserProductsPage;
