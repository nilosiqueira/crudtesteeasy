const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: {
    street: String,
    number: String
  }
});
