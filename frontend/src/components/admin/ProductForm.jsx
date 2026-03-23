import { useEffect, useState } from 'react';

const defaultForm = {
  name: '',
  sku: '',
  category: '',
  price: 0,
  stock: 0,
  minStockLevel: 10,
  description: ''
};

const ProductForm = ({ selected, onSubmit }) => {
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (selected) setForm(selected);
    else setForm(defaultForm);
  }, [selected]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h3>{selected ? 'Edit Product' : 'Add Product'}</h3>
      <div className="grid-2">
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="SKU" value={form.sku} onChange={(e) => setForm({ ...form, sku: e.target.value })} required />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
          required
        />
        <input
          type="number"
          placeholder="Min Stock Level"
          value={form.minStockLevel}
          onChange={(e) => setForm({ ...form, minStockLevel: Number(e.target.value) })}
        />
      </div>
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button className="btn btn-primary" type="submit">
        Save Product
      </button>
    </form>
  );
};

export default ProductForm;
