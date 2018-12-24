const mongoose = require('mongoose');
//create server
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;

//auth
const passport = require('passport');

//routes
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const tweets = require('./routes/api/tweets');

const bodyParser = require("body-parser");


mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//list routes

// app.get("/", (req, res) => res.send("Success!"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/", () => console.log("Home page baby"));
app.use("/api/users", users);
app.use("/api", events);
app.use('/api/tweets', tweets)


//what port to listen on
const port = process.env.PORT || 5000;

//open socket
app.listen(port, () => console.log(`We are listening on port ${port}`));