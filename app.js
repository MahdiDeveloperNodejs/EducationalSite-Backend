const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { AuthRouter } = require("./routes/auth.route");
const { UserRouter } = require("./routes/user.route");
const { CategoryRouts } = require("./routes/category.route");

app.use(
  "/courses/covers",
  express.static(path.join(__dirname, "public", "courses", "covers")),
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/category", CategoryRouts);

module.exports = app;
