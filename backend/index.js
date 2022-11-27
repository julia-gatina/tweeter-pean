'use strict';

/* imports */
const envVar = require('./env-vars');
const express = require('express');
const bodyParser = require('body-parser');
const nodeLiquibase = require('node-liquibase');

/* Test DB connection works  */
require('./db-pool');

const myConfig = {
  ...nodeLiquibase.POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './db/changelog.xml',
  url: `jdbc:postgresql://localhost:${envVar.DB_PORT}/${envVar.DB_NAME}`,
  username: envVar.DB_USERNAME,
  password: envVar.DB_PASSWORD
};
const instTs = new nodeLiquibase.Liquibase(myConfig);
instTs.status();
instTs.update(null);

// Basic express setup:
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require('./lib/in-memory-db');

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require('./lib/data-helpers.js')(db);

// Update the dates for the initial tweets (data-files/initial-tweets.json).
require('./lib/date-adjust')();

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require('./routes/tweets')(DataHelpers);

// Mount the backend routes at the "/api" path prefix:
app.use('/api', tweetsRoutes);

app.listen(envVar.SERVER_PORT, () => {
  console.log('Tweeter backend listening on port ' + envVar.SERVER_PORT);
});
