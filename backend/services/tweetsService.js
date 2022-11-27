'use strict';

const dbPool = require('../db/db-pool');

const getTestData = () => {
  const getTestDataQuery = 'SELECT * FROM test_table_liquibase;';
  return dbPool
    .query(getTestDataQuery, '')
    .then((success) => {
      return success.rows;
    })
    .catch((error) => {
      console.error('Failed to get test data. ', error);
    });
};

module.exports = {
  getTestData
};
