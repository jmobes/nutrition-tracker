const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const editFood = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const { error } = validateFood(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }
  const { meal, name, calories, carbs, protein, fat } = req.body;
  try {
    let user = await User.findOne({
      _id: mongoose.Types.ObjectId(userId),
      diary: {
        $elemMatch: {
          meal: meal.toLowerCase(),
          date: new Date().toDateString(),
        },
      },
    });
    console.log({ user });
    if (!user) {
      return next(new HttpError("User not found", 404));
    }

    // user = await User.findById(userId);
    // if (!user) {
    //   return next(new HttpError("User not found", 404));
    // }

    // user.diary.push({
    //   meal: meal,
    //   foods: {
    //     name: name,
    //     calories: calories,
    //     carbs: carbs,
    //     protein: protein,
    //     fat: fat,
    //   },
    // });

    // await user.save();
    res.status(200).json({ status: "success", food: user.diary });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error", 500));
  }
};

function validateFood(food) {
  let schema = Joi.object({
    date: Joi.date().required(),
    meal: Joi.string()
      .valid("breakfast", "lunch", "dinner", "snack")
      .required(),
    name: Joi.string().min(1).required(),
    calories: Joi.number().min(0).required(),
    carbs: Joi.number().min(0).required(),
    protein: Joi.number().min(0).required(),
    fat: Joi.number().min(0).required(),
  });

  return schema.validate(food);
}

module.exports.editFood = editFood;
