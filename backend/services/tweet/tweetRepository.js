'use strict';

const { Tweet } = require('../../models');
const { User } = require('../../models');
const { errorHandler } = require('../../utils/common-utils');

/**
 * Saves the created tweet to database
 */
const saveTweet = (dbTweet) => {
  return Tweet.create(dbTweet).catch(errorHandler);
};

/**
 * Deletes a tweet by its id
 */
const deleteTweetById = (tweetId) => {
  return Tweet.destroy({ where: { id: tweetId } }).catch(errorHandler);
};

/**
 * Find a tweet by its id
 */
const getTweetById = (tweetId) => {
  return Tweet.findOne({ where: { id: tweetId }, include: { model: User, as: 'user' } }).catch(errorHandler);
};

/**
 * Get Tweets with associated User
 */
const getAllTweets = () => {
  return Tweet.findAll({
    include: { model: User, as: 'user' },
    order: [['created_at', 'DESC']]
  }).catch(errorHandler);
};

module.exports = {
  saveTweet,
  getTweetById,
  getAllTweets,
  deleteTweetById
};
