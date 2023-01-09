'use strict';

const personRepository = require('./personRepository');

/**
 * Get Person list
 */
const findAll = async () => {
  const allPersons = await personRepository.findAll();
  return allPersons;
};

/**
 * Create new Person
 */
const create = async (person) => {
  const createdPerson = await personRepository.create(person);
  return createdPerson;
};

module.exports = {
  findAll,
  create
};
