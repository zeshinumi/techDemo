// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Contract = require('../models/contract');

// Router
Contract.methods(['get','put', 'post', 'delete']);
Contract.register(router,'/contract');

//Return router
module.exports = router;