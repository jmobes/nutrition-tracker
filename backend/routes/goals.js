const express = require("express");
const router = express.Router();
const { setWeight, setMacros } = require("../controllers/goals");

router.patch("/weight/:uid", setWeight);
router.patch("/macros/:uid", setMacros);

module.exports = router;
