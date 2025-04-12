import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Shoes', price: 1200 },
    { id: 2, name: 'Shirt', price: 600 },
  ];

  return (
    <div style={{ width: '300px', borderLeft: '1px solid gray', paddingLeft: '20px' }}>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <strong>{item.name}</strong> - ₹{item.price}
        </div>
      ))}
    </div>
  );
};

export default Cart;
