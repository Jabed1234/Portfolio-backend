//This is for the schema definition
const mongoose = require("mongoose");
require("dotenv").config();

//creating the schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  phoneNumber: String,
  subject: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
çÇ