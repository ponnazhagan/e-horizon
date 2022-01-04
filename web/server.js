const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var qs = require('querystring');

var MongoClient = require('mongodb').MongoClient;
const url1 = "mongodb+srv://pranauv:123@cluster0.lmqbx.mongodb.net/test";


const PORT = 3000;
const app = express();
app.use(bodyparser.json());
app.use(cors());
app.get('/', function(req, res) {
    res.send('Hello');
})
app.post('/registration', function(req, res) {
    console.log(req.body);
    MongoClient.connect(url1, function(err, db) {
        if (err) throw err;
        var dbo = db.db("web").collection("users");
        dbo.insertOne(req.body, function(err, response) {
            if (err) throw err;
            console.log("1 document inserted successfully");
            db.close();
        });
    });
    res.status(200).send({ "message": "Data received" });
})
app.listen(PORT, function() {
    console.log("Server running");
});