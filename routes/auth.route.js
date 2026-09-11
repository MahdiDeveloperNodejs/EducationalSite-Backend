const express = require("express");
const Controller = require("../controllers/auth.controller");
const AuthCheck = require("../validators/register");
const router = express.Router();

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/me", Controller.getMy);

module.exports = {
  AuthRouter: router,
};
