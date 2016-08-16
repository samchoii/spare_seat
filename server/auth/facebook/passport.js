import passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';

exports.setup = function(User, config) {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: [
      'displayName',
      'emails'
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
    User.findOneAsync({
      'facebook.id': profile.id
    })
      .then(function(user) {
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            provider: 'facebook',
            facebook: profile._json
          });
          user.saveAsync()
            .then(function(user) {
              console.log("sending email out \n\n\n" + JSON.stringify(user))
              sendgrid.send({
                to:       user[0].email,
                from:     'support@spareseat.com',
                subject:  'Welcome!',
                text:     'Welcome to SpareSeat!'
              }, function(err, json) {
                if (err) { return console.error(err); }
                console.log("sent:  " + json);
              });
              return done(null, user);
            })
            .catch(function(err) {
              return done(err);
            });
        } else {
          return done(null, user);
        }
      })
      .catch(function(err) {
        return done(err);
      });
  }));
};
