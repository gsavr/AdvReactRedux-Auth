const Authentication = require("./controllers/authentication");

module.exports = (app) => {
  app.get("/", (req, res, next) => {
    res.send(["hello", "there", "you"]);
  });

  app.post("/signup", Authentication.signup);
};
