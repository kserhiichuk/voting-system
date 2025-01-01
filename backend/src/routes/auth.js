import { Router } from 'express';
const router = Router();

import {
  register,
  login,
  getLogin,
  getRegister,
  logout,
} from '../controllers/auth.js';

router.post('/register', register);

router.post('/login', login);

router.get('/login', getLogin);

router.get('/register', getRegister);


router.post('/logout', logout);

export default router;
