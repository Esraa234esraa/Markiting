const ProductCard = ({ product }) => (
  <div className="card">
    <h4>{product.name}</h4>
    <p>{product.category}</p>
    <p>${product.price}</p>
    <p>Stock: {product.stock}</p>
  </div>
);

export default ProductCard;
