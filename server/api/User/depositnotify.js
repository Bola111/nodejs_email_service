const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.admindeposit)

module.exports = router;