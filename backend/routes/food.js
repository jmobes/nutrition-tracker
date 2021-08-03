const express = require("express");
const router = express.Router();
const { getFoods } = require("../controllers/food");

router.get("/", getFoods);

module.exports = router;
