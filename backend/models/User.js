const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  imageUrl: { type: String, required: false },
  job:{type: String, required: false},
  bio:{type: String, required: false}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
