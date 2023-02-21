var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This section must show something about users');
});
router.get('/details', function(req, res, next) {
  res.send('The site can show some user details');
});
module.exports = router;
