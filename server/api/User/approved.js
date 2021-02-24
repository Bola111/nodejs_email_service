const router = require("express").Router();
const userController = require("./controller");

router.post("/", userController.approved)

module.exports = router;