import { Router } from 'express';
const router = Router();

import auth from '../middleware/auth.js';
import { addVoting } from '../controllers/votings.js';

router.get('/', (req, res) => {
  const tokenString = req.headers['authorization']
    ? req.headers['authorization']
    : null;
  const token = tokenString && tokenString.split(' ')[1];
  res.status(200).json({ userId: token });
});

router.post('/add-voting', auth, addVoting);

export default router;
