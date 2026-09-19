const { Router } = require("express");
const multer = require("multer");
const multerStorage = require("../utils/uploader");
const courseController = require("../controllers/course.controller");
const Authmidelwer = require("./../middlewares/auth");
const isAuthmidelwer = require("../middlewares/isAdmin");

const router = Router();

router.route("/").post(
  Authmidelwer,

  multer({
    storage: multerStorage,
    limits: { fieldSize: 1000000000 },
  }).single("cover"),
  courseController.create,
);
router.route("/:id/session").post(
  Authmidelwer,

  // multer({
  //   storage: multerStorage,
  //   limits: { fieldSize: 1000000000 },
  // }).single("video"),
  courseController.createSession,
);
module.exports = {
  CourseRouter: router,
};
