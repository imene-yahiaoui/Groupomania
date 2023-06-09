const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
router.post("/signup", userCtrl.validate("signup"), userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/users", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getUserById);
router.delete("/:id", auth, userCtrl.deleteUser);
router.put("/:id", auth, multer, userCtrl.modifyUser);
module.exports = router;
