import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const handleCheckout = async () => {
    try {
      const res = await axios.post('/api/checkout', { cartItems });
      window.location.href = res.data.url; // Redirect to Stripe
    } catch (err) {
      console.error('Checkout failed', err);
      alert('Checkout error!');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <ul className="my-4 space-y-2">
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Pay with Card
      </button>
    </div>
  );
}
