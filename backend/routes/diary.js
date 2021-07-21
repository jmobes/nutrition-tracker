const express = require("express");
const router = express.Router();
const {
  getFoodDiary,
  getFoodOnDate,
  addFood,
  deleteFood,
} = require("../controllers/diary");

router.get("/:uid", getFoodDiary);
router.post("/:uid", addFood);
router.put("/:uid/:fid", deleteFood);

module.exports = router;
