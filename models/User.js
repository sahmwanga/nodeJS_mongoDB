const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    validate: value => {
      return validator.isEmail(value);
    }
  }
});

module.exports = mongoose.model("Users", userSchema);
