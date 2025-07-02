const { MongoClient } = require("mongodb");
//Reading the .env file
require("dotenv").config(); //the.config is a function from the package which will look for the .ev file
const express = require("express");
const app = express(); //Assigns the express function to app
const cors = require("cors"); //will be used to tell the backend that it safe for the front end to make contact
const PORT = process.env.PORT || 3000;

const connectDB = require("./db"); //Loads the db file which can connect to the
const Contact = require("./contact"); //loads the schema

//The middleware
app.use(cors()); //starts using cors which allows API request from foreign domain
app.use(express.json()); //Automatically parses the incoming data
//Defining how to receive the data

app.post("/submit-form", async (req, res) => {
  //All the expected data name
  const { name, email, phoneNumber, subject, message } = req.body;
  //Sending the code to the backend

  //If the whole form is not recieved
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Please fill out the required fields" });
  }
  //Sending the data to the backend
  try {
    // 2. creating a new variable that can store the information in a specific model
    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      subject,
      message,
    });
    await newContact.save(); // <-- you had missing () here!

    // 3. storing it in a schema with predefined condition from contact.js
    console.log("Saved to DB:", newContact);
    res.status(200).json({ success: true, message: "Form received and saved" }); //lets the user know that the form was saved
  } catch (error) {
    // 4. Catch DB/server issues
    console.error("Error saving contact:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server error. Try again later." });
  }
});
//Start listening for incoming request
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
