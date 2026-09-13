const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");
const Authmidelwer = require("../middlewares/auth");
const isAuthmidelwer = require("../middlewares/auth");
router
  .route("/getAll")
  .get(Authmidelwer, isAuthmidelwer, userController.getAll);

router.post("/Ban/:id", Authmidelwer, isAuthmidelwer, userController.banUser);
router
  .route("/:id")
  .delete(Authmidelwer, isAuthmidelwer, userController.remove);

router
  .route("/role")
  .put(Authmidelwer, isAuthmidelwer, userController.chengrole);
module.exports = {
  UserRouter: router,
};
