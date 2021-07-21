const { User, validate } = require("../models/user");
const HttpError = require("../models/HttpError");
const Joi = require("joi");
const mongoose = require("mongoose");

const getFoodDiary = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  try {
    let user = await User.findById(userId);
    if (!user) {
      return next(new HttpError("User not found with given ID", 404));
    }

    res.status(200).json({ status: "success", diary: user.diary });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

const getFoodOnDate = async (req, res, next) => {
  const userId = req.params.uid;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(new HttpError("Invalid user id", 400));
  }

  const date = req.params.date;
  try {
    let user = await User.findOne({
      _id: mongoose.Types.ObjectId(userId),
      diary: {
        $elemMatch: {
          date: new Date(date),
        },
      },
    });
    if (!user) {
      return next(
        new HttpError("User not found with the given id and date", 404)
      );
    }

    const index = getIndex(user.diary, date);
    if (index < 0) {
      return next(
        new HttpError("Could not find element with the given index", 404)
      );
    }

    res.status(200).json({ status: "success", diary: user.diary[index] });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error.", 500));
  }
};

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
        [meal]: [{ name, calories, carbs, protein, fat }],
      });
    } else {
      const index = getIndex(user.diary, date);
      if (index < 0) {
        return next(new HttpError("Entry index not found", 404));
      }
      user.diary[index][meal].push({ name, calories, carbs, protein, fat });
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

function getIndex(diary, date) {
  return diary.findIndex(
    (entry) => new Date(entry.date).getTime() === new Date(date).getTime()
  );
}

const deleteFood = async (req, res, next) => {
  const userId = req.params.uid;
  const foodId = req.params.fid;
  if (
    !mongoose.Types.ObjectId.isValid(userId) ||
    !mongoose.Types.ObjectId.isValid(foodId)
  ) {
    return next(new HttpError("Invalid user or food id", 400));
  }

  const { error } = validateRemoval(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { meal, date } = req.body;

  try {
    let user = await User.findOne({
      _id: mongoose.Types.ObjectId(userId),
      diary: {
        $elemMatch: {
          [meal]: {
            $elemMatch: {
              _id: foodId,
            },
          },
        },
      },
    });
    if (!user) {
      return next(new HttpError("user not found with food id", 404));
    }

    const index = getIndex(user.diary, date);
    if (index < 0) {
      return next(new HttpError("Entry index not found", 404));
    }

    user.diary[index][meal].pull(foodId);

    await user.save();

    res.status(200).json({ status: "success", message: "food entry removed" });
  } catch (ex) {
    return next(new HttpError(ex.message || "Internal server error", 500));
  }
};

function validateRemoval(food) {
  let schema = Joi.object({
    date: Joi.date().required(),
    meal: Joi.string()
      .valid("breakfast", "lunch", "dinner", "snack")
      .required(),
  });
  return schema.validate(food);
}

module.exports.getFoodDiary = getFoodDiary;
module.exports.addFood = addFood;
module.exports.deleteFood = deleteFood;
