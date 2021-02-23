const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.newDeposit)

module.exports = router;