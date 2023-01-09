'use strict';

/* imports */
const envVar = require('./env-vars');
const express = require('express');
const { log } = require('./tools/logger');
const nodeLiquibase = require('node-liquibase');
const swagger = require('./tools/swagger/swagger');

/* Test DB connection works  */
require('./db/db-pool');

const sequelizeDB = require('./models');

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = require('./lib/in-memory-db');

// Swagger
swagger.initialize(app, envVar.SERVER_PORT);

const DataHelpers = require('./lib/data-helpers.js')(db);

require('./lib/date-adjust')();

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require('./routes/tweets')(DataHelpers);
const personRoutes = require('./routes/person')(DataHelpers);

// Mount the backend routes at the "/api" path prefix:
app.use('/api', tweetsRoutes);
app.use('/api', personRoutes);

sequelizeDB.sequelize.sync().then((req) => {
  app.listen(envVar.SERVER_PORT, () => {
    log.info('Tweeter backend listening on port ' + envVar.SERVER_PORT);
  });
});
