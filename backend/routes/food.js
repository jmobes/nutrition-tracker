const express = require("express");
const router = express.Router();
const { searchFood } = require("../controllers/food");

router.get("/:foodString", searchFood);

module.exports = router;
