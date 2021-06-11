const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, validate } = require("../models/user");

const users = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (ex) {
    res.status(404).json({ status: "unsuccessful", message: ex.message });
  }
};

module.exports = users;
