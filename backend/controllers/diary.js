const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const addFood = async (req, res, next) => {};

function validateFood(food) {}

module.exports.addFood = addFood;
