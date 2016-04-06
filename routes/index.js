var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');

var FACEBOOK_APP_ID = "FACEBOOK_APP_ID"
var FACEBOOK_APP_SECRET = "FACEBOOK_APP_SECRET"

passport.use('facebook-token', new FacebookTokenStrategy({
    clientID        : FACEBOOK_APP_ID,
    clientSecret    : FACEBOOK_APP_SECRET

  },
  function(accessToken, refreshToken, profile, done) {
    console.log("profile");
    console.log(profile);

    var user = {
        'email': profile.emails[0].value,
        'name' : profile.name.givenName + ' ' + profile.name.familyName,
        'id'   : profile.id,
        'token': accessToken
    }

    console.log("user")
    console.log(user)
    // You can perform any necessary actions with your user at this point,
    // e.g. internal verification against a users table,
    // creating new user entries, etc.

    return done(null, user); // the user object we just made gets passed to the route's controller as `req.user`
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.post('/login', 
    passport.authenticate('facebook-token'),
    function (req, res) {
      // do something with req.user
      // res.send(req.user? 200 : 401);
      res.send(req.user);
    });

module.exports = router;
