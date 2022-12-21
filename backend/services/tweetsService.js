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

const getAllTweets = () => {
  const getTweetsDataQuery = `SELECT user_.name,
                                     user_.username,
                                     user_.avatar,
                                     tweet.message,
                                     tweet.created_at,
                                     tweet.type
                              FROM tweet
                                     INNER JOIN user_ on user_id = user_.id
                              ORDER BY tweet.created_at DESC;`;
  return dbPool
    .query(getTweetsDataQuery, '')
    .then((success) => {
      return success.rows;
    })
    .catch((error) => {
      console.error('Failed to fetch tweets data.', error);
    });
};

module.exports = {
  getTestData,
  getAllTweets
};
