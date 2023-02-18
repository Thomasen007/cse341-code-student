const express = require('express');
const router = express.Router();
const patient = require('./patient');
const medProfile = require('./medProfile');
const swagger = require('./swagger');

router.use('/medProfile', medProfile);
router.use('/patient', patient);
router.use('/swagger', swagger);

module.exports = router;