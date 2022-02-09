const Authentication = require("./controllers/authentication");
const passportJwt = require("./services/passport");
const passport = require("passport");

//since we are not using cookies but instead jwt, session must be false so passport does not create one
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  //testing in dev env
  /* app.get("/", requireAuth, (req, res, next) => {
    res.send(["hello", "there", "you"]);
  }); */

  app.post("/api/signin", requireSignin, Authentication.signin);

  app.post("/api/signup", Authentication.signup);
};
