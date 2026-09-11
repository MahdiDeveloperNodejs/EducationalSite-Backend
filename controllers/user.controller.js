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
