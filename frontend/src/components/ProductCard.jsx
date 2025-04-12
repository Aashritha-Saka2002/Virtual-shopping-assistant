import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-3 py-1 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};
