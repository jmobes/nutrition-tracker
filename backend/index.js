const express = require("express");
const app = express();
const mongoose = require("mongoose");
const HttpError = require("./models/HttpError");
const users = require("./routes/users");
const goals = require("./routes/goals");
const posts = require("./routes/posts");
const tdee = require("./routes/tdee");
const diary = require("./routes/diary");
const picture = require("./routes/picture");
require("dotenv").config();

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to nutrition-tracker db..."))
  .catch(() => console.log("Could not connect to database"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "token",
    "Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/users", users);
app.use("/api/goals", goals);
app.use("/api/posts", posts);
app.use("/api/tdee", tdee);
app.use("/api/diary", diary);
app.use("/api/upload", picture);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 5000).json({
    status: "fail",
    error: error.message,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
