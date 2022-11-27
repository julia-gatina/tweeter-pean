'use strict';

const userHelper = require('../lib/util/user-helper');
const tweetsService = require('../services/tweetsService');

const express = require('express');
const tweetsRoutes = express.Router();

module.exports = function (DataHelpers) {
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

  tweetsRoutes.get('/tweets/all', function (req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post('/', function (req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return tweetsRoutes;
};
