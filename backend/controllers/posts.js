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
    let user = await User.findById(userId);
    if (!user) {
      return next(new HttpError("User not found", 404));
    }
  } catch (ex) {
    return next(new HttpError(ex.message, 500));
  }
};

function validatePost(post) {
  let schema = Joi.object({
    body: Joi.string().min(1).max(1000).required(),
  });

  return schema.validate(post);
}

module.exports.createPost = createPost;
