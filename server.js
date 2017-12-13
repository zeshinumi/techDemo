// Dependencies
var express = require('express');
var sql = require('mysql')
var bodyParser = require('body-parser');

// MySql
var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cyborg88$"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start Server
app.listen(3000);
console.log('API is running on port 3000');