import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>🛍 VirtualShop</Link>

      <div style={navLinksContainer}>
        {user?.role === 'admin' && <Link to="/admin" style={linkStyle}>Admin</Link>}
        
        {user ? (
          <>
            <span style={userGreetingStyle}>Hello, {user.username}</span>
            <Link to="/profile" style={linkStyle}>Profile</Link> {/* Add Profile Link */}
            <button onClick={logout} style={logoutButtonStyle}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Register</Link>
          </>
        )}

        <Link to="/cart" style={cartLinkStyle}>
          🛒
          {totalItems > 0 && (
            <span style={cartBadgeStyle}>{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
