const { auth } = require('express-oauth2-jwt-bearer');
const authConfig = require('./auth_config.json');

const ensureAuthenticated = auth({
  audience: authConfig.authorizationParams.audience,
  issuerBaseURL: `https://${authConfig.domain}`
});

module.exports = {
  ensureAuthenticated
};
