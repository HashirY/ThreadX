import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  bio: { type: String },
  // one user can create many threads thats why it is a object
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],

  onboarded: {
    type: Boolean,
    default: false,
  },

  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

// for the first time the second one will be called as there will be no user schema
// after that only the first one will be called
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
