import express from 'express';
const router = express.Router();

router.post('/create-checkout-session', (req, res) => {
  res.send('Stripe checkout route working ✅');
});

export default router;
