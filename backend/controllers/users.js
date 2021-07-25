const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
require("dotenv").config();

const getUser = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid id", 400));
  }
  try {
    const user = await User.findById(userId);
    if (!user) {
      return next(new HttpError("Could not find user with the given ID", 404));
    }

    return res.status(200).json(user);
  } catch (ex) {
    return res.status(404).json({ status: "fail", message: ex.message });
  }
};

const createUser = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: "fail", message: error.details[0].message });

  const { email, password, username } = req.body;
  try {
    let user = new User({
      email,
      password,
      username,
    });

    let salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const savedUser = await user.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "12hr" }
    );
    return res.status(201).json({
      status: "success",
      id: savedUser._id,
      token: token,
    });
  } catch (ex) {
    return res.status(400).json({ status: "fail", message: ex.message });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new HttpError("Please enter an email and password", 400));
  }

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return next(new HttpError("Invalid email or password.", 401));
    }

    const authenticated = await bcrypt.compare(password, existingUser.password);
    if (!authenticated) {
      return next(new HttpError("Invalid email or password.", 401));
    }

    const token = jwt.sign(
      { user: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "12h" }
    );

    res.status(200).json({
      user: existingUser._id,
      token: token,
    });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.login = login;
