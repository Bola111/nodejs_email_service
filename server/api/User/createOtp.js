const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.createOtp)

module.exports = router;