var express = require('express');
var app = express();
var PORT = 3000;
var path = require('path');
var bodyParser = require('body-parser');
var knockknock = require('knock-knock-jokes');
var catMe = require('cat-me')

// A Cat
console.log(catMe());

// MiddleWares
app.use('/public',express.static(path.join(__dirname,'/public')));
var public = path.join(__dirname,'/public/');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
console.log(public);
app.get('/', function (req, res) {
    console.log(path.join(__dirname,'/public'));
    res.sendFile(public+"index.html");
});

app.get("/joke", function(req,res) {
    res.send(knockknock());
}); 

app.get("/myProfile", function(request,response) {
    response.sendFile(public+"portfolio.html");
});

app.post("/print", function(req,res) {
    var name = req.body.nam;
    var age = req.body.age;

    console.log(name,age);

    var object = {
        "Name": name,
        "Age": age,
        "Message": "M server hu"
    };
    res.json(object);
}); 

app.get('/abc',function(req,res){
    //console.log(req);
    console.log("I was in the route /abc");
    res.redirect('/');
});

app.get("/multi/:kuchbhi", function(req,res) {
    console.log(req.params.kuchbhi);
    res.sendStatus(200);
});

app.get("/*", function(req,res) {
    res.send("Nikal");
});
 
app.listen(PORT, function() {
    console.log("Serving on PORT "+PORT);
});