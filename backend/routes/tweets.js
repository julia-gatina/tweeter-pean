'use strict';

const userHelper = require('../lib/util/user-helper');
const tweetsService = require('../services/tweetsService');

const express = require('express');
const tweetsRoutes = express.Router();

module.exports = function (DataHelpers) {
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
   *                $ref: '#/components/schemas/GetTweetResponseDto'
   *       500:
   *        description: Internal server error
   */
  tweetsRoutes.get('/tweet/all', function (req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
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
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/GetTweetResponseDto'
   *       500:
   *        description: Internal server error
   *       400:
   *        description: Invalid request
   */
  tweetsRoutes.post('/tweet', function (req, res) {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    user.avatar = 'https://i.imgur.com/73hZDYK.png';
    const tweet = {
      user: user,
      message: req.body.message,
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweet);
        res.status(201).send();
      }
    });
  });
  return tweetsRoutes;
};
