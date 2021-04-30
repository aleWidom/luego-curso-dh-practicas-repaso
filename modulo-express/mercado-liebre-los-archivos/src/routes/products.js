// ************ Require's ************
const express = require('express');
const router = express.Router();

//requiero multer
const multer = require('multer')
//requiero path
const path = require('path')


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

//utilizo codigo multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    console.log(file)  
    //guardo dentro de public/images/products 
    cb(null, 'public/images/products')
    },
    filename: (req, file, cb) => {
    cb(null, + Date.now() + path.extname(file.originalname))
    }
   })


var upload = multer({ storage: storage });




/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create) 
//utilizo como middleware antes de llegar el controlador upload.any()
router.post('/',  upload.any(), productsController.store); 


// /*** GET ONE PRODUCT ***/ 
 router.get('/:id/', productsController.detail);  

// /*** EDIT ONE PRODUCT ***/ 
 router.get('/edit/:id/', productsController.edit)
 router.patch('/:id', upload.any(), productsController.update)


// /*** DELETE ONE PRODUCT***/ 
 router.delete('/:id', productsController.destroy)


module.exports = router;
