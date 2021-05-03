const express = require('express')
const router = express.Router()

//requiero controllers  admin
const adminControllers = require('../controllers/adminControllers')

//requiero middleware para utilizarlo en forma local
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/',  adminControllers.index)
router.get('/admin' , adminMiddleware , adminControllers.admin)



module.exports = router;