'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/player-controller');


router.post('/:query', controller.new)
router.get('/list/:player', controller.list)




module.exports = router;
