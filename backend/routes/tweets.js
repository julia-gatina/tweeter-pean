'use strict';

const tweetsService = require('../services/tweets/tweetsService');

const express = require('express');
const tweetsRoutes = express.Router();

module.exports = function () {
  /**
   * @openapi
   * /api/healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     summary: Checks if the app is up and running
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  tweetsRoutes.get('/healthcheck', (req, res) => res.sendStatus(200));

  tweetsRoutes.get('/test', function (req, res) {
    return res.status(200).send('Hello world, from backend!');
  });

  tweetsRoutes.get('/test-db', function (req, res) {
    tweetsService
      .getTestData()
      .then((testData) => {
        res.status(200).json(testData);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  /**
   * @openapi
   * /api/tweet/all:
   *  get:
   *     tags:
   *     - Tweets
   *     summary: Gets all tweets
   *     description: Return all tweets
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/TweetResponseDto'
   *       500:
   *        description: Internal server error
   */
  tweetsRoutes.get('/tweet/all', function (req, res) {
    tweetsService
      .getAllTweets()
      .then((tweets) => {
        res.status(200).json(tweets);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });

  /**
   * @openapi
   * /api/tweet:
   *  post:
   *     tags:
   *     - Tweets
   *     summary: Create new a tweet
   *     description: Create new a tweet
   *     requestBody:
   *         description: Create a new tweet
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PostTweetRequestDto'
   *         required: true
   *     responses:
   *       200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/TweetResponseDto'
   *       500:
   *        description: Internal server error
   *       400:
   *        description: Invalid request
   */
  tweetsRoutes.post('/tweet', function (req, res) {
    const tweetDto = req.body;
    if (!tweetDto) {
      res.status(400).json({ error: 'invalid request: no tweet data in POST body' });
      return;
    }

    tweetsService
      .createTweet(tweetDto)
      .then((savedTweet) => {
        res.status(200).json(savedTweet);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });
  return tweetsRoutes;
};
