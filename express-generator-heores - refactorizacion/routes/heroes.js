var express = require('express');
var router = express.Router();
var heroesControllers = require('../controllers/heroesControllers')

/* GET home page. */
router.get('/', heroesControllers.heroes);
router.get('/creditos', heroesControllers.creditos);
router.get('/:id/profesion', heroesControllers.detail);
router.get('/:id/:resenia?/:tipo?', heroesControllers.resenia);

module.exports = router;
