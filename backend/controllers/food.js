const { User } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");
const { foodSearch, foodData } = require("../api/getData");

const searchFood = () => async (req, res, next) => {
  const food = req.params.foodString;
  const { error } = validateFood(food);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  try {
    let foods = await foodSearch(food);
    res.status(200).json({ status: "success", foods: foods });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

function validateFood(food) {
  let schema = Joi.object({
    food: Joi.string().required(),
  });

  return schema.validate(food);
}

module.exports.searchFood = searchFood;
