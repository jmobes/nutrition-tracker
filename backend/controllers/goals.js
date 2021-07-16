const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const setWeight = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.json({ status: "fail", message: "Invalid user id" });
  }

  const { error } = validateWeight(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "fail", message: error.details[0].message });
  }
  const { currentWeight, goalWeight } = req.body;
  try {
    let user = await User.findById(userId);
    user.goals.currentWeight.push({ weight: currentWeight });
    user.goals.goalWeight = goalWeight;
    await user.save();
    res.json({ status: "success", user: user });
  } catch (ex) {
    res.status(500).json({ status: "fail", message: ex.message });
  }
};

const setMacros = async (req, res, next) => {};

function validateWeight(weight) {
  let schema = Joi.object({
    currentWeight: Joi.number().min(0).required(),
    goalWeight: Joi.number().min(0).required(),
  });

  return schema.validate(weight);
}

module.exports.setWeight = setWeight;
