module.exports = {
  apps: [
    {
      /*
       * This environment is created just to test locally how server
       * is going to start on remote environments.
       *
       * Env variables DB_USERNAME and DB_PASSWORD should be passed
       * with pm2 command! (saved in a GitHub secrets)
       */
      name: 'api-local',
      script: './index.js',
      env: {
        NODE_ENV: 'local',
        PORT: 8080,
        DB_PORT: 5430,
        DB_NAME: 'tweeter'
      }
    },
    {
      name: 'api-develop',
      script: './index.js',
      env: {
        NODE_ENV: 'develop',
        PORT: 8080,
        DB_PORT: 5432,
        DB_NAME: 'tweeter_dev'
      }
    },
    {
      name: 'api-release',
      script: './index.js',
      env: {
        NODE_ENV: 'release',
        PORT: 8081,
        DB_PORT: 5432,
        DB_NAME: 'tweeter_qa'
      }
    },
    {
      name: 'api-prod',
      script: './index.js',
      env: {
        NODE_ENV: 'prod',
        PORT: 8082,
        DB_PORT: 5432,
        DB_NAME: 'tweeter'
      }
    }
  ]
};
