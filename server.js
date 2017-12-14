// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Mongoose
mongoose.connect('mongodb://localhost/techDemo',{useMongoClient: true})
    .then(() => require('./db-init')(server))
    .catch(err => console.error(err));

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start Server
app.listen(4000);
console.log('API is running on port 4000');

