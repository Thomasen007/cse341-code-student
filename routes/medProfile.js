const express = require('express');
const router = express.Router();

const medController = require('../controller/medProfile');
const validate = require('../validate');

router.post('/', validate.cleanMedication, medController.createRx);

router.get('/', medController.getAll);

router.get('/:id', medController.getSingle);

router.put('/:id', validate.cleanMedication, medController.updateRx);

router.delete('/:id', medController.deleteRx);

module.exports = router;