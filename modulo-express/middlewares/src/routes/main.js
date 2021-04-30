const express = require('express')
const router = express.Router()

const mainControllers = require('../controllers/mainControllers')


router.get('/', /*middleware,*/ mainControllers.index)

router.get('/products', /*middleware,*/ mainControllers.products)

module.exports = router;