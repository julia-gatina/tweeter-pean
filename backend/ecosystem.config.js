module.exports = {
  apps: [
    {
      name: "api-develop",
      script: "/path/to/my/process",
      env: {
        NODE_ENV: "develop",
        PORT: 8080,
      },
    },
    {
      name: "api-release",
      script: "/path/to/my/process",
      env: {
        NODE_ENV: "release",
        PORT: 8081,
      },
    },
    {
      name: "api-prod",
      script: "/path/to/my/process",
      env: {
        NODE_ENV: "prod",
        PORT: 8082,
      },
    },
  ],
};
