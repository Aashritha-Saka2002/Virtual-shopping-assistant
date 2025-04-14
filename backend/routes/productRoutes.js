import express from 'express';
const router = express.Router();
import Product from '../models/Product.js';
import { authenticateToken, isAdmin } from '../middleware/auth.js';

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Create new product (Admin only)
router.post('/', authenticateToken, isAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Update product (Admin only)
router.put('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating product' });
  }
});

// Delete product (Admin only)
router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product' });
  }
});

export default router;
