const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (ex) {
    return res
      .status(404)
      .json({ status: "unsuccessful", message: ex.message });
  }
};

const createUser = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ status: "fail", message: error.details[0].message });
  const { email, password } = req.body;
  try {
    let user = new User({
      email,
      password,
    });
    user = await user.save();
    return res.status(201).json(user);
  } catch (ex) {
    return res.status(400).json({ status: "fail", message: ex.message });
  }
};

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
