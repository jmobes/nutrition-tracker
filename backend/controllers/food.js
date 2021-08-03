const { User } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");
const { foodSearch } = require("../api/getData");

const getFoods = async (req, res, next) => {
  const { error } = validateSearch(req.body);
  console.log(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }
  const food = req.body.food;
  try {
    let results = await foodSearch(food);
    res.status(200).json({ status: "success", foods: results });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

function validateSearch(foodString) {
  let schema = Joi.object({
    food: Joi.string().required(),
  });

  return schema.validate(foodString);
}

module.exports.getFoods = getFoods;
