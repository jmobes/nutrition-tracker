const express = require("express");
const router = express.Router();
const { getTdee, updateTdee } = require("../controllers/tdee");

router.get("/:uid", getTdee);
router.put("/:uid", updateTdee);

module.exports = router;
