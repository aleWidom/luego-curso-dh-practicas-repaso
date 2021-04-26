var express = require('express');
var router = express.Router();

//Declaro e inicializo la constante mainControllers y le asigno el require de los controladores del main
const mainControllers = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainControllers.root);

module.exports = router;
