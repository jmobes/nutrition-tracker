const express = require("express");
const router = express.Router();
const { uploadPicture, upload, getPicture } = require("../controllers/picture");

router.post("/:uid", upload.single("profilePicture"), uploadPicture);
router.get("/:uid", getPicture);

module.exports = router;
