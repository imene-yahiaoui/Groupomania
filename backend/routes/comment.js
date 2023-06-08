const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comment");

router.get("/", auth, commentCtrl.getAllComment);
router.get("/:id", auth, commentCtrl.getCommentById);
router.post("/:id", auth, commentCtrl.createComment);
router.put("/:id", auth, commentCtrl.modifyComment);
router.delete("/:id", auth, commentCtrl.deleteComment);

module.exports = router;
