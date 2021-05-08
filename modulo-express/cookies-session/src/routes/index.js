var express = require('express');
var router = express.Router();

const mainControllers = require('../controllers/mainControllers')



//en toda la aplicación estoy usando middleware para las cookies

/* GET home page. */
router.get('/', mainControllers.root);
router.get('/color', mainControllers.color);
router.get('/session', mainControllers.session);
router.get('/borrar', mainControllers.borrar);


module.exports = router;
