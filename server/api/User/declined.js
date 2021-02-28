const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.declined)

module.exports = router;