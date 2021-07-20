const express = require("express");
const router = express.Router();
const { addFood } = require("../controllers/diary");

router.put("/:uid", addFood);

module.exports = router;
