const express = require("express");
const router = express.Router();
const { getFoods } = require("../controllers/food");

router.post("/", getFoods);

module.exports = router;
