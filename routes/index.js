var express = require('express');
var router = express.Router();
var os = require("os");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Andy' });
});

router.get('/routes', function(req, res, next) {
  var pjson = require('../package.json');
  res.send(pjson.version);
});

module.exports = router;

