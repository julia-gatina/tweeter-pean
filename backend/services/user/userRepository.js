'use strict';

const { User } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

/**
 * Gets all from users table
 */
const getAllUsers = () => {
  return User.findAll().catch(errorHandler);
};

module.exports = {
  getAllUsers
};
