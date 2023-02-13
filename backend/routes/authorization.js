'use strict';

const personService = require('../services/person/personService');

const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const authorizationRoutes = express.Router();

const users = [];

module.exports = function () {
  authorizationRoutes.post('/auth/login', (req, res) => {
    const credentials = req.body;
    users.push(credentials);

    res.status(200).send('login ok');
  });

  authorizationRoutes.post('/auth/register', async (req, res) => {
    const newUser = req.body;
    try {
      const hashedPassword = await bcrypt.hash(newUser.password, 10);
      newUser.password = hashedPassword;
    } catch (e) {
      throw new Error('Error hashing password');
    }
    newUser.id = uuidv4();
    users.push(newUser);

    res.status(200).send('successfully registered');
  });

  authorizationRoutes.get('/secure/resource', (req, res) => {
    res.status(200).send('secure resource ok');
  });

  return authorizationRoutes;
};
