const express = require("express");
const router = express.Router();
const { createPost, deletePost } = require("../controllers/posts");

router.post("/:uid", createPost);
router.put("/:uid/:pid", deletePost);

module.exports = router;
