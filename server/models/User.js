const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is require"],
    minLength: 6,
  },
});

const userModel = mongoose.model("User", userSchema, "users");

module.exports = userModel;