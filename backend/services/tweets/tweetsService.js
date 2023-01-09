'use strict';

const { v4: uuidv4 } = require('uuid');
const tweetsRepository = require('./tweetsRepository');

/**
 * Creates new tweet
 */
const createTweet = async (tweetDto) => {
  const user = await getRandomUser();
  let dbTweet = tweetDtoToDbTweet(tweetDto, user);
  const successfullySaved = await tweetsRepository.saveTweet(dbTweet);

  if (successfullySaved) {
    dbTweet = await tweetsRepository.getTweetById(dbTweet.id);
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
  const successfullyDeleted = await tweetsRepository.deleteTweetById(tweetId);
  if (successfullyDeleted) {
    console.log('Tweet successfully deleted.');
  } else {
    console.log('Tweet not found.');
  }
  return successfullyDeleted;
};

/**
 * Gets all users and then returns random one
 */
async function getRandomUser() {
  const users = await tweetsRepository.getAllUsers();
  const user = users[Math.floor(Math.random() * users.length)];
  return user;
}

/**
 * Get Tweets and converts each to TweetDto
 */
const getAllTweets = async () => {
  const allDbTweets = await tweetsRepository.getAllTweets();
  const allTweetDtos = allDbTweets.map((dbTweet) => dbTweetToTweetDto(dbTweet));
  return allTweetDtos;
};

function dbTweetToTweetDto(dbTweet) {
  const epochTimestamp = Date.parse(dbTweet.created_at);
  const tweetDto = {
    id: dbTweet.id,
    name: dbTweet.name,
    username: dbTweet.username,
    avatar: dbTweet.avatar,
    message: dbTweet.message,
    created_at: epochTimestamp,
    type: dbTweet.type
  };
  return tweetDto;
}

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
