const express = require("express");
const router = express.Router();
const { getFoods, getFoodInfo } = require("../controllers/food");

router.post("/", getFoods);
router.get("/:fid", getFoodInfo);

module.exports = router;
