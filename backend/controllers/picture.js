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
}).single("profilePicture");

function checkFileType() {
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
  upload(req, res, (err) => {
    if (err) {
      return next(new HttpError(err.message, 400));
    } else {
      if (!req.file) {
        return next(new HttpError("Please select a photo", 400));
      } else {
        res
          .status(200)
          .json({ status: "success", file: `uploads/${req.file.filename}` });
      }
    }
  });
};

module.exports.uploadPicture = uploadPicture;
