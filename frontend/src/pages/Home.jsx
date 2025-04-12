export default function Home() {
    // You can later map real product data here
    const dummyProducts = [
      { id: 1, name: "Product A", price: "$19.99", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Product B", price: "$29.99", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Product C", price: "$39.99", image: "https://via.placeholder.com/150" },
    ];
  
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">🛍️ Shop Products</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-lg text-green-600 font-medium">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  