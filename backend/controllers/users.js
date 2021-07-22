const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");

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
    user = await user.save();
    return res.status(201).json(user);
  } catch (ex) {
    return res.status(400).json({ status: "fail", message: ex.message });
  }
};

module.exports.getUser = getUser;
module.exports.createUser = createUser;
