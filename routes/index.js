var express = require('express');
var router = express.Router();
var os = require("os");

/* GET home page. */
router.get('/', function(req, res, next) {
  var pjson = require('../package.json');
  res.render('index', { title: process.env.TITLE, version: pjson.version });
});

router.get('/routes', function(req, res, next) {
  res.send(os.hostname());
});

module.exports = router;

