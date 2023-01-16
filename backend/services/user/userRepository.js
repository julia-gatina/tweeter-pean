'use strict';

const { User } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

const getAllUsers = () => {
  return User.findAll().catch(errorHandler);
};

module.exports = {
  getAllUsers
};
