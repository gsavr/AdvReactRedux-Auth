const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const keys = require("./config/keys");
const app = express();
const router = require("./router");

//connect to DB
mongoose.connect(keys.mongoURI);
//App Setup
app.use(morgan("combined"));
//morgan is a logging framework for incoming requests
app.use(bodyParser.json({ type: "*/*" }));
//bP parses incoming requests - makes them all into json.
router(app);

if (process.env.NODE_ENV === "production") {
  //make sure that express will serve up production assets like main.js / main.css
  app.use(express.static("client/build"));
  // Express will serve up index.html if it doesn't recognize the route -- React Router will take care of the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Server Setup
const PORT = process.env.PORT || 3090;
app.listen(PORT);
console.log("Server listening on:", PORT);
//const port = process.env.PORT || 3090
//const server = http.createServer(app);
//server.listen(port)
