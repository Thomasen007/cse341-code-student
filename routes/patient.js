const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient');

router.post('/', patientController.createPatient);

router.get('/', patientController.getAll);

router.get('/:id', patientController.getSingle);

router.put('/:id', patientController.updatePatient);

router.delete('/:id', patientController.deletePatient);

module.exports = router;