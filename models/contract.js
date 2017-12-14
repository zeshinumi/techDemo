// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    BusinessNum: Number,
    ActivationDate: Date,
    AmtRequested: Number,
    Status: String
});


// Return model
module.exports = restful.model('Contract', productSchema);