const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");
const Authmidelwer = require("../middlewares/auth");
const isAuthmidelwer = require("../middlewares/auth");

router
  .route("/getAll")
  .get(Authmidelwer, isAuthmidelwer, userController.getAll);

router.post("/Ban/:id", Authmidelwer, isAuthmidelwer, userController.banUser);

module.exports = {
  UserRouter: router,
};
