'use strict';

/* imports */
const envVar = require('./env-vars');
const express = require('express');
const { log } = require('./tools/logger');
const nodeLiquibase = require('node-liquibase');
const swagger = require('./tools/swagger/swagger');
const dbOrm = require('./models');

/* auth imports - start */
const helmet = require('helmet');
const cors = require('cors');
const authConfig = require('./tools/auth/auth_config.json');
/* auth imports - end */

dbOrm.sequelize
  .authenticate()
  .then(() => console.log('Sequelize is successfully initialized and connected to DB'))
  .catch((err) => console.log('Error initializing Sequelize', err));

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

/* auth setup - start */
app.use(helmet());
app.use(
  cors({
    origin: authConfig.appUri
  })
);
/* auth setup - end */

// Swagger
swagger.initialize(app, envVar.SERVER_PORT);

// Routes
const tweetRoutes = require('./routes/tweet')();
const personRoutes = require('./routes/person')();

// Mount the backend routes at the "/api" path prefix:
app.use('/api', tweetRoutes);
app.use('/api', personRoutes);

app.listen(envVar.SERVER_PORT, () => {
  log.info('Tweeter backend listening on port ' + envVar.SERVER_PORT);
});
