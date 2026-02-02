import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="center">Your cart is empty</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>₹ {item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className="btn">
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ₹ {total.toFixed(2)}</h3>
    </div>
  );
}
import { Link } from "react-router-dom";
<Link to="/checkout" className="btn">
  Proceed to Checkout
</Link>
