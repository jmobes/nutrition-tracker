const express = require("express");
const router = express.Router();
const { getUser, createUser, login } = require("../controllers/users");
const authorize = require("../middleware/authorize");

router.get("/:uid", authorize, getUser);
router.post("/", createUser);
router.post("/login", login);

module.exports = router;
