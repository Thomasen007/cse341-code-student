const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  /*
  #swagger.description = 'This gets all the contacts in the database.'
  #swagger.tags = ['Medication Profile']
  */

  const result = await mongodb.getDb().db().collection('medProfile').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  /*
  #swagger.description = 'This gets a single contact from the database from the id.'
  #swagger.tags = ['Medication Profile']
  */
  if (!ObjectId.isValid(req.params.id)) {  
    return res.status(404).send("Must use a valid contact id to find a contact.");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('medProfile').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createRx = async (req, res) => {
  /*
  #swagger.description = 'This creates a Rx in the database.'
  #swagger.tags = ['Medication Profile']
  */
  const medication = {
    patientID: req.body.patientID,
    scriptNumber: req.body.scriptNumber,
    storeNumber: req.body.storeNumber,
    dateWritten: req.body.dateWritten,
    name: req.body.name,
    amount: req.body.amount,
    dispenceAmount: req.body.dispenceAmount,
    expDate: req.body.expDate,
    DAW: req.body.DAW,
    sig: req.body.sig,
    Doctor: req.body.Doctor,
    DAWCode: req.body.DAWCode    
  };
  const result = await mongodb.getDb().db().collection('medProfile').insertOne(medication);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
};

const updateRx = async (req, res) => {
  /*
  #swagger.description = 'This updates a Rx in the database.'
  #swagger.tags = ['Medication Profile']
  */
  if (!ObjectId.isValid(req.params.id)) {  
    return res.status(404).send("Must use a valid contact id to find a contact.");}
  const medication = {
    patientID: req.body.patientID,
    scriptNumber: req.body.scriptNumber,
    storeNumber: req.body.storeNumber,
    dateWritten: req.body.dateWritten,
    name: req.body.name,
    amount: req.body.amount,
    dispenceAmount: req.body.dispenceAmount,
    expDate: req.body.expDate,
    DAW:  req.body.DAW,
    sig: req.body.sig,
    Doctor: req.body.Doctor,
    DAWCode: req.body.DAWCode    
  };
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('medProfile')
    .replaceOne({ _id: userId }, medication);
  console.log(result);
  if (result.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Some error occurred while updating the contact.');
  }
};

const deleteRx = async (req, res) => {
  /*
  #swagger.description = 'The deletes a Rx in the database.'
  #swagger.tags = ['Medication Profile']
  */
  if (!ObjectId.isValid(req.params.id)) {  
    return res.status(404).send("Must use a valid contact id to find a contact.");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('medProfile').deleteOne({ _id: userId }, true);
  console.log(result);
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, getSingle, createRx, updateRx, deleteRx };