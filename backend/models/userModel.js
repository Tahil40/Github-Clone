const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  repositories: {
    default: [],
    type: Schema.Types.ObjectId,
    ref: "Repository",
  },
  followedUser: {
    default: [],
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  starRepository: {
    default: [],
    type: Schema.Types.ObjectId,
    ref: "Repository",
  },
});

const UserModal = mongoose.model("User", UserSchema);
module.exports =  UserModal;