const express = require("express")
const router = express.Router();
const { login, register } = require("../controller/AuthController");




router.post("/register", register);



module.exports = router;