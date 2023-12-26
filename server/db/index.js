require("dotenv").config;
const mongoose = require("mongoose");

mongoose.set('strictQuery',true)
    .connect(process.env.MONGO_URI)
    .catch (e=> {console.error('Connection error', e.message)})

var db = mongoose.connection

module.exports = db;
