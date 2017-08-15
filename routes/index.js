var express = require('express');
var router = express.Router();

var easymapCollection = require('../models/database/map.easy');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/getmapdata',function(req,res,next){
  easymapCollection.find({"_id" : "5992886a826be61ab0e16375"},function(err,result){
    if(err){
      console.log("find easy map data something error: "+err)
    }else{
      console.log('get easy data map');
      res.send(result);
    }    
  })
});

module.exports = router;
