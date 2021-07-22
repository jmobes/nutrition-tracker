const express = require("express");
const router = express.Router();
const { getPosts, createPost, deletePost } = require("../controllers/posts");

router.get("/", getPosts);
router.post("/:uid", createPost);
router.put("/:uid/:pid", deletePost);

module.exports = router;
