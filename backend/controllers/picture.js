const { User } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Image files of type jpeg/jpg/png only.");
  }
}

const uploadPicture = async (req, res, next) => {
  if (!req.file) {
    return next(new HttpError("Please select a photo", 400));
  }

  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid id", 400));
  }

  try {
    let user = await User.findById(userId);
    if (!user) {
      return next(new HttpError("User with the given id was not found.", 404));
    }
    user.picture = req.file.filename;
    await user.save();
    res
      .status(200)
      .json({ status: "success", file: `uploads/${req.file.filename}` });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

const getPicture = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid id", 400));
  }

  try {
    let user = await User.findById(userId);
    if (!user) {
      return next(new HttpError("Could not find user with the given ID.", 404));
    }

    res.json({ status: "success", picture: user.picture });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

module.exports.uploadPicture = uploadPicture;
module.exports.upload = upload;
module.exports.getPicture = getPicture;
