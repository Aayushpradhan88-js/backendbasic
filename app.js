const express = require('express')
const app = express()

//connecting to ejs files backend
app.set("view engine", "ejs");
//connecting to ejs files backend

//rendering or connecting to views/backend.js 
app.get('/', (req, res) => {
    res.render("backend");
})
//rendering or connecting to views/backend.js

app.get('/feed', (req, res) => {
  res.send("profile");
})


//Mongodb
//Process to make a database
/*
-- install mongodb
-- install mongoosejs
-- require and setup connection
-- make a schema(document smallest part of a database)
-- create model and export
*/
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})