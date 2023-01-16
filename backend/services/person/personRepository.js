'use strict';

const { Person } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const findAll = () => {
  return Person.findAll().catch(errorHandler);
};

const create = (person) => {
  return Person.create(person).catch(errorHandler);
};

module.exports = {
  findAll,
  create
};
