module.exports = {
  apps: [
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
