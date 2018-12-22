const mongoose = require('mongoose');
//create server
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
//list routes
app.get("/", (req, res) => res.send("Success!"));

//what port to listen on
const port = process.env.PORT || 5000;

//open socket
app.listen(port, () => console.log(`We are listening on port ${port}`));