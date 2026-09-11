const mongoose = require("mongoose");
const env = require("dotenv").config();
const URL = process.env.MONGO_URI;

async function ConectedDB() {
  mongoose
    .connect(URL)
    .then(console.log(`mongodb connected`))
    .catch((err) => {
      console.log(err, "mongodb canected nist");
    });
}

ConectedDB();
