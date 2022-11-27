'use strict';

/* imports */
const envVar = require('../env-vars');
const { Pool } = require('pg');

const dbPool = new Pool({
  host: 'localhost',
  port: envVar.DB_PORT,
  database: envVar.DB_NAME,
  user: envVar.DB_USERNAME,
  password: envVar.DB_PASSWORD
});
dbPool.connect((err, client) => {
  if (!err) {
    console.log(`>>>>>>>>>>>>>>>>>>>>>> DB is connected.\nClient: ${client.user}\nDB name: ${client.database}`);
  } else {
    console.error('Error: ', err);
  }
});

const query = (queryString, queryParams) => {
  console.log('Query String =================>\n', queryString);
  console.log('Query Params =================>\n', queryParams);
  return dbPool.query(queryString, queryParams);
};

module.exports = {
  query
};
