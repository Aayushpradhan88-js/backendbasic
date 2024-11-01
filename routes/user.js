const express = require("express");
const router = express.Router();
const usermodel = require('./db');
// const { render } = require("ejs");

router.get('/', (req, res) => {
    res.render("backend");
})

router.get('/data',async (req,res) => {
    const createdUser = await usermodel.create({
        username: "Aayush",
        email: "aayushpradhan@gmail.com",
        password: 99967123478456,
        age: 19
    })

    res.send(createdUser);
})

module.exports = router;

const port = 3000;
console.log(`the port is running${port}`)