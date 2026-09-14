const { default: mongoose, model } = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  href: { type: String, required: true },
});
const CategoryModel = model("Category", CategorySchema);
module.exports = CategoryModel;
