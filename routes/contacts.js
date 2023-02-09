const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
const validate = require('../validate')

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validate.cleanContact, contactsController.createContact);

router.put('/:id', validate.cleanContact, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
