const CategoryModel = require("../models/category.model");

exports.create = async (req, res) => {
  const { title, href } = req.body;
  const checkExistByTitle = await CategoryModel.findOne({ title });
  if (checkExistByTitle) {
    return res.status(403).json({
      message: "این قبلا وارد شده است ",
    });
  }
  const user = await CategoryModel.create({ title, href });
  return res.status(200).json(user);
};

exports.getAll = async (req, res) => {
  const getAllOption = await CategoryModel.find({});
  return res.status(200).json(getAllOption);
};

exports.remove = async (req, res) => {
  // mahdizare
};

exports.update = async (req, res) => {
  // mahdizare
};
