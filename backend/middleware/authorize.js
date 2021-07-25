const HttpError = require("../models/HttpError");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function authorize(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.token;
    if (!token) return next(new HttpError("unauthorized", 401));

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = verified.user;
    next();
  } catch (err) {
    return next(new HttpError("unauthorized", 401));
  }
}

module.exports = authorize;
