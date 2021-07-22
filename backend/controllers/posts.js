const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const getPosts = async (req, res, next) => {
  try {
    let users = await User.find({ posts: { $elemMatch: { $exists: true } } });
    if (!users.length) {
      return next(new HttpError("No posts were found", 404));
    }

    let postsArr = [];
    users.forEach((user) => {
      postsArr = [...postsArr, ...user.posts];
    });

    res.json({ status: "success", posts: postsArr });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

const createPost = async (req, res, next) => {
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

    user.posts.push({ body: body });
    await user.save();
    res.status(201).json({ status: "success", post: user.posts });
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

const deletePost = async (req, res, next) => {
  const userId = req.params.uid;
  const postId = req.params.pid;
  if (
    !mongoose.Types.ObjectId.isValid(userId) ||
    !mongoose.Types.ObjectId.isValid(postId)
  ) {
    return next(new HttpError("Invalid Id", 400));
  }

  try {
    let user = await User.findOne({
      _id: userId,
      posts: { $elemMatch: { _id: mongoose.Types.ObjectId(postId) } },
    });
    if (!user) {
      return next(new HttpError("user or post not found", 404));
    }
    user.posts.pull(postId);
    await user.save();
    res.json({ status: "success", userPosts: user.posts });
  } catch (ex) {
    return next(new HttpError(ex.message, 500));
  }
};

module.exports.getPosts = getPosts;
module.exports.createPost = createPost;
module.exports.deletePost = deletePost;
