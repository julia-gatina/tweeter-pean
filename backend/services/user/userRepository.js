'use strict';

const { User } = require('../../models');

const getAllUsers = () => {
  return User.findAll().catch(errorHandler());
};

function errorHandler() {
  return (error) => {
    console.error(error);
    throw error;
  };
}

module.exports = {
  getAllUsers
};
