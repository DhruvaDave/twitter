const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (_, done) {
  done(null, {});
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google.clientId,
      clientSecret: config.auth.google.secretId,
      callbackURL: 'http://localhost:3000/v1/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
