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

const deleteTweetById = (tweetId) => {
  const query = `DELETE
                 FROM tweet
                 WHERE id = $1`;
  const params = [tweetId];
  return dbPool
    .query(query, params)
    .then((success) => {
      return success.rowCount; // if deleted: 1, if not found: 0
    })
    .catch((error) => {
      console.error('Failed to delete tweet.', error);
    });
};

const getTweetById = (tweetId) => {
  const query = `SELECT t.id,
                        u.name,
                        u.username,
                        u.avatar,
                        t.message,
                        t.created_at,
                        t.type
                 FROM tweet AS t
                        INNER JOIN user_ AS u ON u.id = t.user_id
                 WHERE t.id = $1 LIMIT 1`;
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
  const query = `SELECT t.id, u.name, u.username, u.avatar, t.message, t.created_at, t.type
                 FROM tweet AS t
                        INNER JOIN user_ AS u ON u.id = t.user_id
                 ORDER BY t.created_at DESC`;
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
  getAllTweets,
  deleteTweetById
};
