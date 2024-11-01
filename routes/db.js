//Mongodb
//Process to make a database
/*
-- install mongodb
-- install mongoosejs
-- require and setup connection
-- make a schema(document smallest part of a database)
-- create model and export
*/

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/db"); //connecting nodejs with the help of mongoose to mongodb.

//making a basic schema code which contains username, email, password, age.
const user = mongoose.Schema({
    usename: String,
    email: String,
    password: Number,
    age: Number
})

// Exporting the user or say schema code.
module.exports = mongoose.model("usedata", user); //mongoose.model("name", schema)
