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
      maxlength: 255,
      unique: true,
    },
    picture: {
      type: String,
      default: null,
    },
    goals: {
      currentWeight: [
        {
          date: {
            type: Date,
            default: Date.now,
          },
          weight: {
            type: Number,
            default: null,
          },
        },
      ],
      goalWeight: {
        type: Number,
        default: null,
      },
      calories: {
        type: Number,
        default: null,
      },
      carbs: { type: Number, min: 0, max: 100, default: null },
      protein: { type: Number, min: 0, max: 100, default: null },
      fat: { type: Number, min: 0, max: 100, default: null },
    },
    tdee: {
      type: Number,
      default: null,
    },
    posts: [
      {
        date: {
          type: Date,
          default: Date.now,
          required: true,
        },
        body: {
          type: String,
          minlength: 1,
          maxlength: 1000,
          required: true,
        },
      },
    ],
    diary: [
      {
        date: {
          type: Date,
          default: Date.now,
          required: true,
        },
        meal: {
          type: String,
          required: true,
        },
        foods: [
          {
            name: {
              type: String,
              minlength: 2,
              maxLength: 1000,
              required: true,
            },
            calories: {
              type: Number,
              required: true,
              min: 0,
            },
            carbs: {
              type: Number,
              required: true,
              min: 0,
            },
            protein: {
              type: Number,
              required: true,
              min: 0,
            },
            fat: {
              type: Number,
              required: true,
              min: 0,
            },
          },
        ],
      },
    ],
  })
);

function validateUser(user) {
  let schema = Joi.object({
    email: Joi.string().min(5).max(255).email().required(),
    password: passwordComplexity().required(),
    username: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;
