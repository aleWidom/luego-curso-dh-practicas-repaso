var express = require('express');

var router = express.Router();

let apiControllers = require('../../controllers/api/apiControllers')

router.get('/', apiControllers.root);
router.get('/genre', apiControllers.genre);
router.get('/:id', apiControllers.detail);
router.post('/', apiControllers.create);
router.patch('/:id', apiControllers.edit);
router.delete('/:id', apiControllers.delete);

module.exports = router;