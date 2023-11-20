'use strict';

const personService = require('../services/person/personService');

const express = require('express');
const { ensureAuthenticated } = require('../tools/auth/authorization');
const personRoutes = express.Router();

module.exports = function () {
  /**
   * @openapi
   * /api/person/all:
   *  get:
   *     tags:
   *     - Persons
   *     summary: Gets all persons
   *     description: Return all persons
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/PersonResponseDto'
   *       500:
   *        description: Internal server error
   */
  personRoutes.get('/person/all', ensureAuthenticated, function (req, res) {
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
   * @openapi
   * /api/person:
   *  post:
   *     tags:
   *     - Persons
   *     summary: Create new a person
   *     description: Create new a person
   *     requestBody:
   *         description: Create a new person
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PostPersonRequestDto'
   *         required: true
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/PersonResponseDto'
   *       500:
   *        description: Internal server error
   *       400:
   *        description: Invalid request
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
