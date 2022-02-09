const passport = require("passport");
const User = require("../models/user");
const { jwtSecret } = require("../config/keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

//Create local strategy to login with email/pw
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  //verify email and password, call done with user if correct
  //otherwise call done with false
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    //compare password - 'password' equal to user.password?
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
});

//Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: jwtSecret,
};

//Create JWT strategy //payload is decoded with jwt token
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  //See if the user id in payload exists in db, if it does call done w/user
  User.findById(payload.sub, (err, user) => {
    if (err) {
      //otherwise call done without a user object
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      //did not find user
      done(null, false);
    }
  });
});

//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
