var express = require('express');
var mongoose=require("mongoose");
var router = express.Router();
var wave = require('../model/wave');

//Display All Movie in DataBase

router.get('/display', function(req, res, next) {
var movie=mongoose.model('waveCollections');
  movie.find({},function(err,data){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send(data);
    }

  })

});

//Adding wave form to the data base

router.post('/add', function(req, res, next) {
  console.log('Inside post');
    var wave1 = new wave(req.body);
    wave1.save(function (err,data) {
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send("added");
    }
});
});
module.exports = router;
