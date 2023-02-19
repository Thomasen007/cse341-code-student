const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient');
const validate = require('../validate');

router.post('/', validate.cleanPatient, patientController.createPatient);

router.get('/', patientController.getAll);

router.get('/:id', patientController.getSingle);

router.put('/:id',  validate.cleanPatient, patientController.updatePatient);

router.delete('/:id', patientController.deletePatient);

module.exports = router;