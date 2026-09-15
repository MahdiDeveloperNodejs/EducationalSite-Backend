const { default: mongoose, model } = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    title: { type: String, requires: true },
    time: { type: String, requires: true },
    free: { type: String, Number: true },
    video: { type: String, requires: true },
    course: { type: mongoose.Types.ObjectId, ref: "course" },
  },
  { timestamps: true },
);

const SessionModel = model("session", sessionSchema);
module.exports = SessionModel;
