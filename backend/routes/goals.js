const express = require("express");
const router = express.Router();
const { getGoals, setWeight, setMacros } = require("../controllers/goals");

router.get("/:uid", getGoals);
router.patch("/weight/:uid", setWeight);
router.patch("/macros/:uid", setMacros);

module.exports = router;
