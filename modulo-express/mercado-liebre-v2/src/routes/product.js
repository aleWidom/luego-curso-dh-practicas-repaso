var express = require('express');
var router = express.Router();

const productControllers = require('../controllers/productControllers')

/* GET users listing. */
router.get('/:category/:id/detail', productControllers.root)

module.exports = router;
