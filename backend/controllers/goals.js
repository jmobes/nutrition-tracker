const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const setWeight = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const { error } = validateWeight(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { currentWeight, goalWeight } = req.body;
  try {
    let user = await User.findById(userId);
    if (currentWeight) {
      user.goals.currentWeight.push({ weight: currentWeight });
    }
    if (goalWeight) {
      user.goals.goalWeight = goalWeight;
    }
    await user.save();
    res.status(201).json({ status: "success", user: user });
  } catch (ex) {
    return next(new HttpError(ex.message, 500));
  }
};

function validateWeight(weight) {
  let schema = Joi.object({
    currentWeight: Joi.number().min(0),
    goalWeight: Joi.number().min(0),
  });

  return schema.validate(weight);
}

const setMacros = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const { error } = validateMacros(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { calories, carbs, protein, fat } = req.body;
  try {
    let user = await User.findById(userId);
    if (calories) {
      user.goals.calories = calories;
    }
    if (carbs) {
      user.goals.carbs = carbs;
    }
    if (protein) {
      user.goals.protein = protein;
    }
    if (fat) {
      user.goals.fat = fat;
    }

    await user.save();
    res.status(201).json({ status: "success", user: user });
  } catch (ex) {
    return next(new HttpError(ex.message, 500));
  }
};

function validateMacros(macros) {
  let schema = Joi.object({
    calories: Joi.number().min(1200),
    carbs: Joi.number().min(0).max(100),
    protein: Joi.number().min(0).max(100),
    fat: Joi.number().min(0).max(100),
  });

  return schema.validate(macros);
}

module.exports.setWeight = setWeight;
module.exports.setMacros = setMacros;
