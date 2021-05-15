var express = require('express');
var router = express.Router();

const mainControllers = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainControllers.root );
router.get('/family', mainControllers.family );
module.exports = router;
