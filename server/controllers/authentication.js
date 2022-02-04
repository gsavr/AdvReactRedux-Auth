const User = require("../models/user");
const jwt = require("jwt-simple");
const { secretString } = require("../config/keys");

const tokenForUser = (user) => {
  const timeStamp = newDate().getTime();
  //iat = "issued at time"
  return jwt.encode({ sub: user.id, iat: timeStamp }, secretString);
};

exports.signup = (req, res, next) => {
  //res.send({ success: "true" });
  //console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //make sure that user provided all required fields
  if (!name || !email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide a name, email, and password" });
  }

  //See if a user with given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    //If a user with email does exit return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is already in use" });
    }
    //if email does not exist, create and save new user record
    const user = new User({
      name: name,
      email: email,
      password: password,
    });
    user.save((err) => {
      if (err) {
        return next(err);
      }
      //Respond to request that user was created
      res.json({ success: true });
    });
  });
};
