module.exports = {
  apps: [
    {
      name: 'api-develop',
      script: './index.js',
      env: {
        NODE_ENV: 'develop',
        PORT: 8080,
      },
    },
    {
      name: 'api-release',
      script: './index.js',
      env: {
        NODE_ENV: 'release',
        PORT: 8081,
      },
    },
    {
      name: 'api-prod',
      script: './index.js',
      env: {
        NODE_ENV: 'prod',
        PORT: 8082,
      },
    },
  ],
};
