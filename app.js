const mongoose = require('mongoose');
//create server
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;

//routes
const users = require("./routes/api/users");
const events = require("./routes/api/events");

const bodyParser = require("body-parser");


mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//list routes

app.get("/", (req, res) => res.send("Success!"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api", events);


//what port to listen on
const port = process.env.PORT || 5000;

//open socket
app.listen(port, () => console.log(`We are listening on port ${port}`));