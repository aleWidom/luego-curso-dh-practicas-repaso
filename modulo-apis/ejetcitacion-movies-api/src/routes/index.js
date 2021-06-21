var express = require('express');
var router = express.Router();

let indexControllers = require('../controllers/indexControllers');

router.get('/', indexControllers.root);


module.exports = router;
