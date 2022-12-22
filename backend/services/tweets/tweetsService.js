'use strict';

//import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
const format = require('date-format');
const tweetsRepository = require('./tweetsRepository');

const getTestData = async () => {
  return await tweetsRepository.getTestData();
};

/**
 * Gets random user, passes tweetDto converted to dbTweet to be saved to db and returns that saved tweet as tweetDto
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
  const formattedDate = format('dd-MM-yyyy', dbTweet.created_at);
  const tweetDto = {
    name: dbTweet.name,
    username: dbTweet.username,
    avatar: dbTweet.avatar,
    message: dbTweet.message,
    created_at: formattedDate,
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
  getTestData,
  getAllTweets
};
