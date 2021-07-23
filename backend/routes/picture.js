const express = require("express");
const router = express.Router();
const { uploadPicture } = require("../controllers/picture");

router.post("/upload/:uid", uploadPicture);

module.exports = router;
