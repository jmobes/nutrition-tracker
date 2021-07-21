const express = require("express");
const router = express.Router();
const { addFood } = require("../controllers/diary");

router.post("/:uid", addFood);

module.exports = router;
