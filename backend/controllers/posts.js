const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const createPost = () => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const { error } = validatePost(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { body } = req.body;
  try {
  } catch (ex) {
    return next(new HttpError(ex.message, 500));
  }
};

function validatePost() {}

module.exports.createPost = createPost;
