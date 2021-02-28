const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.verifyOtp)

module.exports = router;