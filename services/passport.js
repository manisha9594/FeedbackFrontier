const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user,done)=>
{
done(null,user.id);
});

passport.use(
   new GoogleStrategy({
   clientID: keys.googleClientID,
   clientSecret: keys.googleClientSecret,
   callbackURL :'/auth/google/callback'
},

(accessToken, refreshToken, profile, done) => {
   User.findOne({ googleId: profile.id })
   .then(existingUser => {
       if (existingUser) {
           // User already exists, proceed with the existing user
           return done(null, existingUser);
       }
       // If new user
       new User({ googleId: profile.id })
           .save()
           .then(user => done(null, user))
           .catch(err => done(err));
   })
   .catch(err => done(err));
}
),
);