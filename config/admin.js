module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'jwtsecret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'saltsaltsalt'),
  },
});
