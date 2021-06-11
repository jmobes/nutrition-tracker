const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const express = require("express");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024,
    },
  })
);

function validateUser(user) {
  let schema = Joi.object({
    email: Joi.string().min(5).max(255).email().required(),
    password: passwordComplexity().required(),
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;
