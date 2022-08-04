const mongoose = require('mongoose');

// connecting to db in asynchronous way
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connected to db successfully');
  });
};

module.exports = connectDB;
