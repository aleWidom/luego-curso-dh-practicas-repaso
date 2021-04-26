var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/category/:id/detail', function(req, res, next) {
  res.send('Bienvenido a product')
})

module.exports = router;
