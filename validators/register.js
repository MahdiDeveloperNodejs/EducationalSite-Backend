const Validator = require("fastest-validator");

const v = new Validator();

const AuthValidator = {
  name: { type: "string", min: 5, max: 50 },
  fullName: { type: "string", min: 3, max: 50 },
  email: { type: "email", min: 0, max: 256 },
  phone: { type: "string" },
  password: { type: "string", min: 6, max: 16 },
  conferpassword: { type: "equal", field: "password" },
  $$strict: true,
};

const AuthCheck = v.compile(AuthValidator);

module.exports = AuthCheck;
