import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '', description: '', category: '' });
  const [editingId, setEditingId] = useState(null);
  const api = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    const res = await axios.get(`${api}/api/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (editingId) {
      await axios.put(`${api}/api/products/${editingId}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      await axios.post(`${api}/api/products`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    setForm({ name: '', price: '', image: '', description: '', category: '' });
    setEditingId(null);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`${api}/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-2 border" />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="p-2 border" />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="p-2 border" />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="p-2 border" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="p-2 border" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <h2 className="text-xl font-bold mb-2">All Products</h2>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p._id} className="flex justify-between border p-2 items-center">
            <div>
              <strong>{p.name}</strong> - ${p.price}
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(p)} className="bg-yellow-500 px-2 py-1 rounded text-white">Edit</button>
              <button onClick={() => handleDelete(p._id)} className="bg-red-500 px-2 py-1 rounded text-white">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
