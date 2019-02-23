const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const userModel = require('./model.js');

mongoose.connect("mongodb+srv://iet:webdev2019@cluster0-g2r7o.azure.mongodb.net/usersdb?retryWrites=true", (err)=>{
    if(err) {
        console.log(err);
        throw err;
    }else{
        console.log("DB connected");
    }
    
})

app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());

const port = 5000;

app.post('/save', (req, res, next) => {
    console.log(req.body);
    // var temp = mongoose.model('users');
    // var newUser = new temp({
    //     email: req.body.email,
    //     password: req.body.password
    // });
    const newUser = new userModel({
        email: req.body.email,
        password: req.body.password
    });
    console.log(typeof(newUser));
    newUser
        .save()
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: "User Saved Sucefully",
                status: true
            });
        }).catch((err) => {
            console.log(err);
            throw err;
        });
});

// app.get('/', (req, res, next) => {
//     console.log("I am inside get /");
// });

// app.use('/', (req, res, next) => {
//     console.log("I am middleware");
//     next();
// });

// app.get('/save', (req, res, next) => {
//     console.log("I am another middleware");
// });

// app.post('/save', (req, res, next) => {
//     //console.log(req.body);
//     console.log("HEllo world");
//     res.send("Something something");
// });

app.listen(port, function() {
    console.log("Server running at port: " + port);
});   