const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.registerNewUser);

module.exports = router;