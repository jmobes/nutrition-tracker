const express = require("express");
const router = express.Router();
const { editFood } = require("../controllers/diary");

router.put("/:uid", editFood);

module.exports = router;
