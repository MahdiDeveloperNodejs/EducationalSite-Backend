const app = require("./app");
require("dotenv").config();
require("./config/mongodb.confing");

app.get("/", (req, res) => {
  console.log("Token =>", req.header("Authorization"));
  res.json({message:"klfdmbkldf"});
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server run http://localhost:${PORT}`);
});
