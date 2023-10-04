const express = require("express");
const router = express.Router();
const { logInEmployee } = require("../controller/LogInController");
router.post("/employee/login",logInEmployee);
module.exports = router;