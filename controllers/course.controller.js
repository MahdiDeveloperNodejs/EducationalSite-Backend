const CourseModel = require("../models/course.model");
const SessionModel = require("../models/session.model");

exports.create = async (req, res) => {
  const {
    name,
    description,
    support,
    href,
    price,
    status,
    discount,
    categoryID,
  } = req.body;

  const course = await CourseModel.create({
    name,
    description,
    creator: req.user._id,
    categoryID,
    support,
    price,
    href,
    status,
    discount,
    cover: req.file.filename,
  });
  res.status(201).json(course);
};

exports.createSession = async (req, res) => {
  const { title, time, free } = req.body;
  const { id } = req.body;

  const createSession = SessionModel.create({
    title,
    time,
    free,
    video: "Video.mp4",
    course: id,
  });
  return res.status(201).json(createSession);
};
