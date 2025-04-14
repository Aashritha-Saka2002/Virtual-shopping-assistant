// aiRoutes.js
import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

import { requireRole } from '../middleware/role.js';
import { authenticateToken } from '../middleware/auth.js';


router.get('/dashboard', authenticateToken, requireRole('admin'), (req, res) => {
  res.json({ message: `Welcome admin ${req.user.username}` });
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

export default router;
