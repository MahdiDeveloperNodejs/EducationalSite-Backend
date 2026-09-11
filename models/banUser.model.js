const { Schema, model } = require("mongoose");

const BanUserSchma = new Schema(
  {
    phone: { type: String, required: true },
  },
  { timestamps: true },
);

const BanUserModel = model("Ban", BanUserSchma);
module.exports = BanUserModel;
