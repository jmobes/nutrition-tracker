const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");

const setWeight = async (req, res, next) => {
  const { error } = validateWeight(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "fail", message: error.details[0].message });
  }
  const { currentWeight, goalWeight } = req.body;
};

const setMacros = async (req, res, next) => {};

function validateWeight(body) {
  let currentWeight = body.currentWeight ? body.currentWeight : null;
  let goalWeight = body.goalWeight ? body.goalWeight : null;

  let schema = Joi.object({
    currentWeight: Joi.number().min(0).required(),
    goalWeight: Joi.number().min(0).required(),
  });

  return schema.validate(weight);
}
