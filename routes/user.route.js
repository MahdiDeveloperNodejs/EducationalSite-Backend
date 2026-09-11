const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");

router.post("/Ban/:id", userController.banUser);

module.exports = {
  UserRouter: router,
};
