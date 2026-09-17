const CourseModel = require("../models/course.model");

exports.create = async (req, res) => {
  const {
    name,
    description,
    support,
    href,
    price,
    status,
    discant,
    categoryId,
  } = req.body;

  const course = await CourseModel.create({
    name,
    description,
    caver: req.file.filename,
    creator: req.user._is,
    support,
    href,
    price,
    status,
    discant,
    categoryId,
  });

  res.status(201).json(course);
};
