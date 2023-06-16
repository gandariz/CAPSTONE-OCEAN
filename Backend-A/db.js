const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(
    //   "mongodb+srv://testing_db:123@instance01.dcyyzeu.mongodb.net/",
    //   {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;
