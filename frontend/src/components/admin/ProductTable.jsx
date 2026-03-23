import StockIndicator from './StockIndicator';

const ProductTable = ({ products, onEdit, onDelete }) => (
  <div className="card">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>SKU</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>
              <StockIndicator stock={product.stock} minStockLevel={product.minStockLevel} />
            </td>
            <td>
              <button className="btn btn-primary" type="button" onClick={() => onEdit(product)}>
                Edit
              </button>{' '}
              <button className="btn btn-danger" type="button" onClick={() => onDelete(product._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
