const { User } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const uploadPicture = async (req, res, next) => {};

module.exports.uploadPicture = uploadPicture;
