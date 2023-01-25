const express = require('express');
const router = express.Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

router.use('/contacts', contacts);
router.use('/swagger', swagger);

module.exports = router;
