// Dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const contractRoutes = require('./api/routes/contracts');

mongoose.connect(
   "mongodb://zeshinumi:" +
   process.env.MONGO_ATLAS_PW +
   "@techdemo-shard-00-00-vrbsc.mongodb.net:27017,techdemo-shard-00-01-vrbsc.mongodb.net:27017,techdemo-shard-00-02-vrbsc.mongodb.net:27017/test?ssl=true&replicaSet=techDemo-shard-0&authSource=admin",
   {useMongoClient: true}
);
// mongoose.connect(
//     'mongodb://localhost/techDemo',
//     {
//         useMongoClient: true
//     }
// );

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use((req,res,next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers", 
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if(req.method == 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
// });

// ROUTES
app.use('/contracts', contractRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;