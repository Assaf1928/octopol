'use strict';
const https = require('https');
var consumer = require('../service/consumer');

const controllers = {
    producer: (req, res) => {
    const data = {
           type: req.params.type,
           message: req.params.message
       }

       switch(data.type) {
           case 'ok': 
           consumer.ok(req,res, (err,dist) => {
               if(err)
                res.send(err);
        
           });
           break
           case 'error': 
           consumer.err(req,res, (err,dist) => {
               if(err)
                 res.send(err);

           })
           break;

           default:null;
        }
        


   }
};

module.exports = controllers;