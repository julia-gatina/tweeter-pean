'use strict';

const personService = require('../services/person/personService');

const express = require('express');
const personRoutes = express.Router();

module.exports = function () {
  /**
   * TODO: add Swagger Docs
   */
  personRoutes.get('/person/all', function (req, res) {
    personService
      .findAll()
      .then((personList) => {
        res.status(200).json(personList);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  /**
   * TODO: add Swagger Docs
   */
  personRoutes.post('/person', function (req, res) {
    const person = req.body;
    personService
      .create(person)
      .then((person) => {
        res.status(200).json(person);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  return personRoutes;
};
