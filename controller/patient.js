const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  /*
  #swagger.description = 'This gets all the patient in the database.'
  */

  const result = await mongodb.getDb().db().collection('patient').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  /*
  #swagger.description = 'This gets a single patient from the database from the id.'
  */
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('patient').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createPatient = async (req, res) => {
  /*
  #swagger.description = 'This creates a patient in the database.'
  */
  const patient = {
    firstName: req.body.firstName,
    middleIntial: req.body.middleIntial,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    address: req.body.address,
    id: req.body.id,
    contact: req.body.contact, 
    insurance:req.body.insurance
  };
  const result = await mongodb.getDb().db().collection('patient').insertOne(patient);
  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
};

const updatePatient= async (req, res) => {
  /*
  #swagger.description = 'This updates a patient in the database.'
  */
  const patient = {
    firstName: req.body.firstName,
    middleIntial: req.body.middleIntial,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    address: req.body.address,
    id: req.body.id,
    contact: req.body.contact, 
    insurance:req.body.insurance
  };
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('patient')
    .replaceOne({ _id: userId }, patient);
  console.log(result);
  if (result.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Some error occurred while updating the contact.');
  }
};

const deletePatient = async (req, res) => {
  /*
  #swagger.description = 'The deletes a contact in the database.'
  */
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('patient').deleteOne({ _id: userId }, true);
  console.log(result);
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = { getAll, getSingle, createPatient, updatePatient, deletePatient };