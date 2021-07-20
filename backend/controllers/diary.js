const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const addFood = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const { error } = validateFood(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }
};

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
