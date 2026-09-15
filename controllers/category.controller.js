const { default: mongoose } = require("mongoose");
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
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(402).json({
      message: "همچین ایدی وجود ندارد ",
    });
  }
  const user = await CategoryModel.findById(id);
  if (user) {
    await CategoryModel.deleteOne(user);
    return res.status(201).json({
      message: "deleted successfuly",
    });
  }
  return res.status(409).json({
    message: "route not found",
  });
};

exports.update = async (req, res) => {
  const { title, href } = req.body;
  const user = await CategoryModel.findOne({ title, href });
  if (user) {
    const isUpdated = await CategoryModel.findByIdAndUpdate(
      { _id: req.params.id },
      { title, href },
    );
    if (isUpdated) {
      return res.status(201).json(
        {
          message: `updated successfully  `,
        },
        isUpdated,
      );
    }
  }
  return res.status(409).json({
    message: "rot not defend",
  });
};
