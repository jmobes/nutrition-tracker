const express = require("express");
const router = express.Router();
const { updateTdee } = require("../controllers/tdee");

router.put("/uid", updateTdee);

module.exports = router;
