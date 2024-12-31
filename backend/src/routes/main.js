import { Router } from 'express';
const router = Router();

import { getVotings } from '../controllers/main.js';

router.get('/', getVotings);

export default router;
