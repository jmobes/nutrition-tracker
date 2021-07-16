const express = require("express");
const router = express.Router();
const { setWeight } = require("../controllers/goals");

router.post("/:uid", setWeight);

module.exports = router;
