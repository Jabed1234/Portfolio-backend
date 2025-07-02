require("dotenv").config(); // Loads .env variables into process.env
//This is primarily for backend to store data to database
const mongoose = require("mongoose");

//Connect to Database using mongoose module
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the DB successfully");
  } catch (error) {
    console.error("Connection Failed", error.message);
    process.exit(1);
  }
};
module.exports = connectDB; //Exports the file as module so it can be used by server.js
