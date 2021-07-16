const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/users");
const goals = require("./routes/goals");
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

app.use("/api/users", users);
app.use("/api/goals", goals);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
