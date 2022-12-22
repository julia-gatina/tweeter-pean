'use strict';

const dbPool = require('../../db/db-pool');

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

const saveTweet = (dbTweet) => {
  const query = `INSERT INTO tweet (id, type, message, created_at, user_id)
                 VALUES ($1, $2, $3, $4, $5);`;
  const params = [dbTweet.id, dbTweet.type, dbTweet.message, dbTweet.created_at, dbTweet.user_id];
  return dbPool
    .query(query, params)
    .then((success) => {
      return success.rowCount > 0;
    })
    .catch((error) => {
      console.error('Failed to save tweet.', error);
    });
};

const getTweetById = (tweetId) => {
  const query = `SELECT *
                 FROM tweet
                        INNER JOIN user_ on user_id = user_.id
                 WHERE tweet.id = $1 LIMIT 1;`;
  const params = [tweetId];
  return dbPool
    .query(query, params)
    .then((success) => {
      return success.rows[0];
    })
    .catch((error) => {
      console.error('Failed to fetch tweet by id.', error);
    });
};

const getAllTweets = () => {
  const query = `SELECT *
                 FROM tweet
                        INNER JOIN user_ on user_id = user_.id
                 ORDER BY tweet.created_at DESC;`;
  return dbPool
    .query(query, '')
    .then((success) => {
      return success.rows;
    })
    .catch((error) => {
      console.error('Failed to fetch tweets data.', error);
    });
};

const getAllUsers = () => {
  const query = `SELECT *
                 FROM user_`;
  return dbPool
    .query(query, '')
    .then((success) => {
      return success.rows;
    })
    .catch((error) => {
      console.error('Failed to fetch users data.', error);
    });
};

module.exports = {
  getAllUsers,
  saveTweet,
  getTweetById,
  getTestData,
  getAllTweets
};
