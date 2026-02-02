import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      {user ? (
        <>
          <span>{user.email}</span>{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
