const { default: mongoose } = require("mongoose");
const BanUserModel = require("../models/banUser.model");
const UserModel = require("../models/user.model");

exports.banUser = async (req, res) => {
  const mainUserRsulete = await UserModel.findOne({
    _id: req.params.id,
  }).lean();
  const mainBanRsulte = BanUserModel.create({
    phone: mainUserRsulete.phone,
  });
  if (BanUserModel) {
    return res.status(200).json({
      message: "کاربر با معفقیت بن شده است ",
    });
  }
  return res.status(500).json({ message: "مشکل از سرور است " });
};
exports.getAll = async (req, res) => {
  const user = await UserModel.find({});

  return res.json(user);
};
exports.remove = async (req, res) => {
  const isValideUserID = mongoose.isValidObjectId(req.params.id);
  if (!isValideUserID) {
    return res.status(409).json({
      message: "user id is not vlide",
    });
  }
  const removedUser = await UserModel.findByIdAndDelete({ _id: req.params.id });
  if (!removedUser) {
    return res.status(403).json({
      message: "ther is no user",
    });
  }
  return res.status(200).json({
    message: "deleted successfully.",
  });
};
exports.chengrole = async (req, res) => {
  const { id } = req.body;
  const user = await UserModel.findById({ id: _id });
  const newRole = user.role === "ADMIN" ? "USER" : "ADMIN";
  console.log(newRole);
};
