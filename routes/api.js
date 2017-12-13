// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');

// Router
Product.methods(['get','put', 'post', 'delete']);
Product.register(router,'/products');

//router.get('/products', function(req, res){
//    res.send('api is working');
//})

//Return router
module.exports = router;