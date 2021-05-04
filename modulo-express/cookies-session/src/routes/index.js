var express = require('express');
var router = express.Router();

const mainControllers = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainControllers.root);
router.get('/color', mainControllers.color);
router.get('/session', mainControllers.session);

module.exports = router;
