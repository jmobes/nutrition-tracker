const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const updateTdee = async (req, res, next) => {};

function validateTdee(tdee) {
  let schema = Joi.object({
    tdee: Joi.number().min(0).max(1200).required(),
  });

  return schema.validate(tdee);
}

module.exports.validateTdee = validateTdee;
