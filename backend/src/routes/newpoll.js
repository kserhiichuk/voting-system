const express = require('express');
const router = express.Router();

const votingsController = require('../controllers/votings');

router.get('/', (req, res) => {
  res.render('newpoll');
});

router.post('/add-voting', votingsController.addVoting);

module.exports = router;
