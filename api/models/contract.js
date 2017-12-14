// Dependencies
var mongoose = require('mongoose');

// Schema
var contractSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    businessnum: Number,
    activationdate: Date,
    amtrequested: Number,
    status: String
});

// Return model
module.exports = mongoose.model('Contract', contractSchema);