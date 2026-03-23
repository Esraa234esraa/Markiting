import { useEffect, useState } from 'react';
import { productApi } from '../../api/api';
import ProductForm from '../../components/admin/ProductForm';
import ProductTable from '../../components/admin/ProductTable';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadProducts = () => productApi.list().then((res) => setProducts(res.data));

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (payload) => {
    if (payload._id) await productApi.update(payload._id, payload);
    else await productApi.create(payload);
    setSelected(null);
    loadProducts();
  };

  const handleDelete = async (id) => {
    await productApi.remove(id);
    loadProducts();
  };

  return (
    <div className="page-card">
      <h2>Products Management</h2>
      <ProductForm selected={selected} onSubmit={handleSubmit} />
      <ProductTable products={products} onEdit={setSelected} onDelete={handleDelete} />
    </div>
  );
};

export default AdminProductsPage;
