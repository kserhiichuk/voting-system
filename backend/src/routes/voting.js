import { Router } from 'express';
const router = Router();

import auth from '../middleware/auth.js';
import {
  getVoting,
  castVote,
  closeVoting,
  openVoting,
  retractVote,
  deleteVoting,
  getResult,
} from '../controllers/votings.js';

router.get('/:id', getVoting);

router.post('/:id/vote', auth, castVote);

router.put('/:id/close', auth, closeVoting);

router.put('/:id/open', auth, openVoting);

router.post('/:id/retract', auth, retractVote);

router.delete('/:id', auth, deleteVoting);

router.get('/:id/res', getResult);

export default router;
