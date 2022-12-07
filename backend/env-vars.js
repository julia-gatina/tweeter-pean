'use strict';

/* Env variables from command line and ecosystem.config.js */
const SERVER_PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
  SERVER_PORT,
  DB_NAME,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD
};
