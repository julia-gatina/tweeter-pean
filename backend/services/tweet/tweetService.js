'use strict';

const { v4: uuidv4 } = require('uuid');
const tweetRepository = require('./tweetRepository');
const userService = require('./../user/userService');

/**
 * Creates new tweet
 */
const createTweet = async (tweetDto) => {
  const user = await userService.getRandomUser();
  let dbTweet = tweetDtoToDbTweet(tweetDto, user);
  const successfullySaved = await tweetRepository.saveTweet(dbTweet);

  if (successfullySaved) {
    dbTweet = await tweetRepository.getTweetById(dbTweet.id);
    const savedTweetDto = dbTweetToTweetDto(dbTweet);
    return savedTweetDto;
  } else {
    return null;
  }
};

/**
 * Deletes specific tweet by its ID
 */
const deleteTweet = async (tweetId) => {
  const successfullyDeleted = await tweetRepository.deleteTweetById(tweetId);
  if (successfullyDeleted) {
    console.log('Tweet successfully deleted.');
  } else {
    console.log('Tweet not found.');
  }
  return successfullyDeleted;
};

/**
 * Get Tweets and converts each to TweetDto
 */
const getAllTweets = async () => {
  const allDbTweets = await tweetRepository.getAllTweets();
  const allTweetDtos = allDbTweets.map((dbTweet) => dbTweetToTweetDto(dbTweet));
  return allTweetDtos;
};

function dbTweetToTweetDto(dbTweet) {
  const epochTimestamp = Date.parse(dbTweet.created_at);
  const tweetDto = {
    id: dbTweet.id,
    message: dbTweet.message,
    type: dbTweet.type,
    user: dbTweet.user,
    created_at: epochTimestamp
  };
  return tweetDto;
}

/**
 * Converts created tweet to DbTweet
 * @param tweetDto
 * @param user
 * @returns {{user_id, created_at: Date, id: (string|*), type, message}}
 */
function tweetDtoToDbTweet(tweetDto, user) {
  const dbTweet = {
    id: uuidv4(),
    type: tweetDto.type,
    message: tweetDto.message,
    created_at: new Date(),
    user_id: user.id
  };
  return dbTweet;
}

module.exports = {
  createTweet,
  deleteTweet,
  getAllTweets
};
