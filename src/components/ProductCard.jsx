import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
      />
      <h3>{product.title}</h3>
      <p className="price">$ {product.price}</p>

      <Link to={`/product/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
