const app = require("./app");
require("dotenv").config();
require("./config/mongodb.confing");



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server run http://localhost:${PORT}`);
});
