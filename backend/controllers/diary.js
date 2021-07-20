const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const addFood = async (req, res, next) => {};

function validateFood(food) {
  let schema = Joi.object({
    name: Joi.string().min(1).required(),
    calories: Joi.number().min(0).required(),
    carbs: Joi.number().min(0).required(),
    protein: Joi.number().min(0).required(),
    fat: Joi.number().min(0).required(),
  });

  return schema.validate(food);
}

module.exports.addFood = addFood;
