'use strict';

const tweetService = require('../services/tweet/tweetService');

const express = require('express');
const tweetRoutes = express.Router();

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
  tweetRoutes.get('/healthcheck', (req, res) => res.sendStatus(200));

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
  tweetRoutes.get('/tweet/all', function (req, res) {
    tweetService
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
   * /api/tweet/{id}:
   *  delete:
   *     tags:
   *     - Tweets
   *     summary: Deletes tweet
   *     description: Delete tweet
   *     parameters:
   *      - name: id
   *        in: path
   *        description: Tweet id to delete
   *        required: true
   *        schema:
   *          type: string
   *     responses:
   *       204:
   *        description: Success, no content
   *       500:
   *        description: Internal server error
   *       404:
   *        description: Not found
   *       400:
   *        description: invalid request no tweet ID in DELETE request
   */
  tweetRoutes.delete('/tweet/:id', function (req, res) {
    const tweetId = req.params.id;
    if (!tweetId) {
      res.status(400).json({ error: 'invalid request: no tweet ID in DELETE request' });
      return;
    }

    tweetService
      .deleteTweet(tweetId)
      .then((successfullyDeleted) => {
        if (successfullyDeleted) {
          res.status(204).end();
        } else {
          res.status(404).end();
        }
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
  tweetRoutes.post('/tweet', function (req, res) {
    const tweetDto = req.body;
    if (!tweetDto) {
      res.status(400).json({ error: 'invalid request: no tweet data in POST body' });
      return;
    }

    tweetService
      .createTweet(tweetDto)
      .then((savedTweet) => {
        res.status(200).json(savedTweet);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  });
  return tweetRoutes;
};
