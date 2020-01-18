const express = require("express");
const app = express();
const router = express.Router;
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config({ debug: process.env.DEBUG });

const db = process.env.MONGO_URI;

// mounting of middlewares
app.use(cors());
app.use(bodyParser.json()); // help you parse the req.body object from json to a normal js object
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

// creating a connection to the database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected successfully to the database"))
  .catch(err => console.log(err.message));

// creating server

app.listen(3001, () => {
  console.log("listening on port " + 3001);
});
