const { Router } = require("express");
const multer = require("multer");
const multerStorage = require("../utils/uploader");
const courseController = require("../controllers/course.controller");

const router = Router();

router
  .route("/")
  .post(
    multer({
      storage: multerStorage,
      limits: { fieldSize: 1000000000 },
    }).single("cover"),
    courseController.create
  );

module.exports = {
  CourseRouter: router,
};
