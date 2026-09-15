const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/category.controller");
const Authmidelwer = require("./../middlewares/auth");
const isAuthmidelwer = require("../middlewares/isAdmin")

router
  .route("/")
  .post(Authmidelwer, categoryController.create)
  .get(categoryController.getAll);

router
  .route("/:id")
  .delete(Authmidelwer, categoryController.remove)
  .put(Authmidelwer, categoryController.update);

module.exports = {
  CategoryRouts: router,
};
