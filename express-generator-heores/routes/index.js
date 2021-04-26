var express = require('express');
var router = express.Router();
var mainControllers = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainControllers.index);
router.get('/heroes', mainControllers.heroes);
router.get('/heroes/creditos', mainControllers.creditos);
router.get('/heroes/:id/profesion', mainControllers.detail);
router.get('/heroes/:id/:resenia?/:tipo?', mainControllers.resenia);

module.exports = router;
