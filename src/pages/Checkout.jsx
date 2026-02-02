import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    card: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.card) {
      alert("Please fill all fields");
      return;
    }

    alert("🎉 Order placed successfully!");
    localStorage.removeItem("cart");
    navigate("/");
    window.location.reload(); // simple cart reset
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
        />

        <input
          name="card"
          placeholder="Card Number"
          value={form.card}
          onChange={handleChange}
        />

        <button className="btn">Place Order</button>
      </form>

      <h3>Total: ₹ {total.toFixed(2)}</h3>
    </div>
  );
}
