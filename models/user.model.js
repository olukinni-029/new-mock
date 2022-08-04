const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    last_name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 16,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 16,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
