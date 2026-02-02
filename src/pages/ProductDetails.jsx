import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="center">Loading...</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹ {product.price}</h3>
        <button onClick={() => addToCart(product)} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

