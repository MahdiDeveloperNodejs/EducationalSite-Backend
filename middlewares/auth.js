const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");


module.exports = async (req, res, next) => {
  const authHeader = req.header("Authorization")?.split(" ");

  if (authHeader?.length !== 2) {
    return res.status(403).json({
      message: "This route is protected and you can't have access to it !!",
    });
  }

  const token = authHeader[1];

  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(jwtPayload.id).lean();

    Reflect.deleteProperty(user, "password");

    req.user = user;

    next();
  } catch (error) {
    return res.json(error);
  }
};
