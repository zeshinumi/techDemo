import { Schema } from 'mongoose';

// Dependencies
var restful = require('node-restful');
var sql = restful.sql;

// Schema
var productSchema = new Schema({
    name: String,
    sku: String,
    price: Number
});


// Return model
module.exports = restful.module('Products', productSchema);