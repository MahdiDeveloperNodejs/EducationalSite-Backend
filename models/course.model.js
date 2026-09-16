const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    caver: { type: String, required: true },
    support: { type: String, required: true },
    href: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
    discant: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

courseSchema.virtual("session", {
  ref: "session",
  localField:"_id",
  foreignField:"course"
});

courseSchema.virtual("Comment", {
  ref: "Comment",
  localField:"_id",
  foreignField:"course"
});


const CourseModel = model("course", courseSchema);

module.exports = CourseModel;
