const express = require('express');
const router = express.Router();

const medController = require('../controller/medProfile');

router.post('/', medController.createRx);

router.get('/', medController.getAll);

router.get('/:id', medController.getSingle);

router.put('/:id', medController.updateRx);

router.delete('/:id', medController.deleteRx);

module.exports = router;