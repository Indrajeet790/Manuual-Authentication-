const express = require("express");
const router = express.Router();
const userController = require("../controllers/users_controller");

router.get("sign-up", userController.signUp);
router.get("/sign-in", userController.signIn);

module.exports = router;
