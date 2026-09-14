const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/category.controller");
const Authmidelwer = require("../middlewares/auth");
const isAuthmidelwer = require("../middlewares/isAdmin");

router
  .route("/")
  .post(Authmidelwer, isAuthmidelwer, categoryController.create)
  .get(categoryController.getAll);

router
  .route("/:id")
  .delete(Authmidelwer, isAuthmidelwer, categoryController.remove)
  .put(Authmidelwer, isAuthmidelwer, categoryController.update);

module.exports = {
  CategoryRouts: router,
};
