'use strict';

const { Person } = require('../../models');

const findAll = () => {
  return Person.findAll().catch(errorHandler());
};

const create = (person) => {
  return Person.create(person).catch(errorHandler());
};

/**
 * Prints error and return it further.
 */
function errorHandler() {
  return (error) => {
    console.error(error);
    throw error;
  };
}

module.exports = {
  findAll,
  create
};
