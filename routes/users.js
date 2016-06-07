var express = require('express');
var router = express.Router();

/* GET users listing, this function will eventually 
be used to get the users that are signed in with passport */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
