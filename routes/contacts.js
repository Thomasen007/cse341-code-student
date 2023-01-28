const express = require('express');
const router = express.Router();

const contactsController = require('../Controller/contacts');

router.post('/', contactsController.createContact);

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
