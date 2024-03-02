const { auth } = require('express-oauth2-jwt-bearer');
const envVar = require('../../env-vars');
const { UserInfoClient } = require('auth0');

const ensureAuthenticated = auth({
  audience: envVar.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${envVar.AUTH0_DOMAIN}`
});

const userInfoClient = new UserInfoClient({
  domain: envVar.AUTH0_DOMAIN
});

const ensureUserEmailVerified = async (req, res, next) => {
  const userInfo = await userInfoClient.getUserInfo(req.auth.token);
  if (!userInfo?.data?.email_verified) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Email is not verified' });
  }
  next();
};

module.exports = {
  ensureAuthenticated,
  ensureUserEmailVerified
};
