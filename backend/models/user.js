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
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      unique: true,
    },
    goals: {
      currentWeight: Number,
      goalWeight: Number,
      calories: Number,
      carbs: { type: Number, min: 0, max: 100 },
      protein: { type: Number, min: 0, max: 100 },
      fat: { type: Number, min: 0, max: 100 },
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
