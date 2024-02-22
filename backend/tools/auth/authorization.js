const { auth } = require('express-oauth2-jwt-bearer');
const envVar = require('../../env-vars');

const ensureAuthenticated = auth({
  audience: envVar.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${envVar.AUTH0_DOMAIN}`
});

module.exports = {
  ensureAuthenticated
};
