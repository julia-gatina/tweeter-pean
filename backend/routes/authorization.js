'use strict';

const personService = require('../services/person/personService');

const express = require('express');
const authorizationRoutes = express.Router();

module.exports = function () {
  authorizationRoutes.post('/auth/login', function (req, res) {
    res.status(200).send('login ok');
  });

  authorizationRoutes.get('/secure/resource', function (req, res) {
    res.status(200).send('secure resource ok');
  });

  return authorizationRoutes;
};
