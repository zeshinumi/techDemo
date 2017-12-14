const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Contract = require('../models/contract')

router.get('/',(req,res,next)=>{
    Contract.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.post('/',(req,res,next)=>{
    const contract = new Contract({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        businessnum: req.body.businessnum,
        activationdate: req.body.activationdate,
        amtrequested: req.body.amtrequested,
        status: req.body.status
    });
    contract
        .save()
        .then(result =>{
            console.log(result);            
            res.status(201).json({
                message: 'Handling POST requests to /contracts',
                createdContract: contract
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:contractID',(req,res,next)=>{
    const id = req.params.contractID;
    Contract.findById(id)
        .exec()
        .then(doc =>{
            console.log("From database", doc);
            if(doc){
                res.status(200).json(doc);
            }else{
                res.status(404).json({message: 'No valid entry found'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
            
});

router.patch('/:contractID',(req,res,next)=>{
    const id = req.params.contractID;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Contract.update({_id: id},{$set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

});

router.delete('/:contractID',(req,res,next)=> {
    const id = req.params.contractID;
    Contract.remove({ _id: id })
        .exec()
        .then(res => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });        
});

module.exports = router;