const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const addFood = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const { error } = validateFood(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { date, meal, name, calories, carbs, protein, fat } = req.body;

  try {
    let user = await User.findOne({
      _id: mongoose.Types.ObjectId(userId),
      diary: {
        $elemMatch: {
          meal: meal,
          date: new Date(date),
        },
      },
    });
    if (!user) {
      user = await User.findById(userId);
      if (!user) {
        return next(new HttpError("User not found", 404));
      }
      user.diary.push({
        date: new Date(date),
        meal: meal,
        foods: [{ name, calories, carbs, protein, fat }],
      });
    } else {
      const index = getIndex(user.diary, { meal, date });
      user.diary[index].foods.push({ name, calories, carbs, protein, fat });
    }

    await user.save();
    res.status(200).json({
      status: "success",
      message: "food added",
    });
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

function getIndex(diary, newEntry) {
  return diary.findIndex(
    (entry) =>
      entry.meal === newEntry.meal &&
      new Date(entry.date).getTime() === new Date(newEntry.date).getTime()
  );
}

module.exports.addFood = addFood;
