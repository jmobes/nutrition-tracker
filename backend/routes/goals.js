const express = require("express");
const router = express.Router();
const { setWeight, setMacros } = require("../controllers/goals");

router.post("/weight/:uid", setWeight);
router.put("/macros/:uid", setMacros);

module.exports = router;
