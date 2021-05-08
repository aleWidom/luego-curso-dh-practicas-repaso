var express = require('express');
var router = express.Router();


//en toda la aplicación estoy usando middleware para las cookies

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
