const BanUserModel = require("../models/banUser.model");
const UserModel = require("../models/user.model");
const AuthCheck = require("./../validators/register");
const bcrypt = require("bcrypt");
const createHttperrors = require("http-errors");
const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const vlid = AuthCheck(req.body);
  if (vlid != true) {
    return res.status(422).json(vlid);
  }
  const { fullName, name, email, phone, password, role } = req.body;
  const isExistbyChrck = await UserModel.findOne({
    $or: [{ fullName }, { email }],
  });
  const isValideuserBan = await BanUserModel.find({ phone });
  if (isValideuserBan.length) {
    return res.status(409).json({
      message: "شما بن شده اید",
    });
  }
  if (isExistbyChrck) {
    return res.status(409).json({
      message: "این یوزنیم و پسورد قبلا وادر شده است.",
    });
  }
  //const cunOf = await UserModel.count();
  const hashendPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    fullName,
    name,
    phone,
    password: hashendPassword,
    email,
    //role: cunOf > 0 ? "USER" : "ADMIN",
  });
  const userObject = user.toObject();
  Reflect.deleteProperty(
    userObject,
    "password",
    "__v",
    "updatedAt",
    "createdAt",
  );
  const accsecTocken = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 day",
  });
  return res.status(201).json({ user: userObject, accsecTocken });
};

exports.login = async (req, res) => {
  const { indifire, password } = req.body;
  const user = await UserModel.findOne({
    $or: [{ fullName: indifire }, { email: indifire }],
  });
  if (!user)
    throw new createHttperrors.NotFound("یوزنیم یا ایمیل شما اشتباه است");
  const isPasswordValide = await bcrypt.compare(password, user.password);
  if (!isPasswordValide)
    throw new createHttperrors.NotFound("پسورد وارد شده اشتباه است.");
  const acssessToken = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30 day",
  });
  return res.status(201).json({ acssessToken });
};

exports.getMy = async (req, res) => {};
