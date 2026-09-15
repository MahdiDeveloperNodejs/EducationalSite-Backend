const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
  body: { type: String, required: true },
  course: { type: Schema.Types.ObjectId, ref: "course", required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  isAccept: { type: Number, default: 0 },
  score: { type: Number, default: 5 },
});

const CommentModel = model("Comment", CommentSchema);
module.exports = CommentModel;
