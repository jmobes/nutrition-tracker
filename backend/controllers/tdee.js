const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const updateTdee = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("invalid user id", 400));
  }

  const { error } = validateTdee(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const tdee = req.body.tdee;
  try {
    let user = await User.findById(userId);
    user.tdee = tdee;
    await user.save();
    res.status(200).json({ status: "success", tdee: user.tdee });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error", 500));
  }
};

function validateTdee(tdee) {
  let schema = Joi.object({
    tdee: Joi.number().min(1200).required(),
  });

  return schema.validate(tdee);
}

module.exports.updateTdee = updateTdee;
