const express = require("express");
const router = express.Router();
const { addFood, deleteFood } = require("../controllers/diary");

router.post("/:uid", addFood);
router.put("/:uid/:fid", deleteFood);

module.exports = router;
