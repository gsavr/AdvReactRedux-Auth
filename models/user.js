const mongoose = require("mongoose");
const { Schema } = mongoose;
//const bcrypt = require("bcrypt-nodejs");
const bcrypt = require("bcryptjs");

//Define our model
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

//using bcryptjs: //do not use arrow functions

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;

    return next();
  } catch (error) {
    return next(error);
  }
});
/*  //bcrypt-node js, last updated 2013 - changed to bcryptjs
//On Save Hook, encrypt pw
//before saving model - run this function //bcrypt is not updated to use arrow functions
userSchema.pre("save", function (next) {
  //get access to user model
  const user = this;

  //generate a salt then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    //hash(encrypt) pw using salt(randomly generated string of char)
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      //overwrite plaintext pw with encrypted pw
      user.password = hash;
      next();
    });
  });
}); */

//add method to user model to do password comparison when loggin in (passport.js)
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(
    String(candidatePassword),
    String(this.password),
    function (err, isMatch) {
      if (err) {
        return callback(err);
      }

      callback(null, isMatch);
    }
  );
};

//Create the model class
const ModelClass = mongoose.model("user", userSchema);

//export the model
module.exports = ModelClass;
