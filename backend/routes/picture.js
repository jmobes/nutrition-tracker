const express = require("express");
const router = express.Router();
const { uploadPicture, upload } = require("../controllers/picture");

router.post("/:uid", upload.single("profilePicture"), uploadPicture);

module.exports = router;
