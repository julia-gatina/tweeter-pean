'use strict';

const userRepository = require('./userRepository');

/**
 * Gets all users and then returns random one
 */
const getRandomUser = async () => {
  const users = await userRepository.getAllUsers();
  const user = users[Math.floor(Math.random() * users.length)];
  return user;
};

module.exports = {
  getRandomUser
};
