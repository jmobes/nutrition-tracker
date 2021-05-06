const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to nutrition-tracker db..."))
  .catch(() => console.log("Could not connect to database"));
