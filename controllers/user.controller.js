const { default: mongoose } = require("mongoose");
const BanUserModel = require("../models/banUser.model");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

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
  const isValideUserID = mongoose.isValidObjectId(id);
  if (!isValideUserID) {
    return res.status(409).json({
      message: "user id is not valid",
    });
  }
  const user = await UserModel.findOne({ _id: id });
  let newRole = user.role === "ADMIN" ? "USER" : "ADMIN";
  console.log(newRole);
  const updateUser = await UserModel.findByIdAndUpdate(
    { _id: id },
    {
      role: newRole,
    },
  );
  if (updateUser) {
    return res.status(200).json({
      message: "User Roel Changer Sussesfully",
    });
  }
  return res.status(500).json({
    message: "internal server error",
  });
};
exports.updateUser = async (req, res) => {
  const { fullName, name, email, phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await UserModel.findByIdAndUpdate(
    { _id: req.user._id },
    { name, fullName, email, phone, password: hashedPassword },
    // { : 0 },
  ).lean();
  return res.json(user);
};
