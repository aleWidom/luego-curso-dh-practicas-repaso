// ************ Require's ************
const express = require('express');
const router = express.Router();

const multer = require('multer')

// ************ Controller Require ************
const productsController = require('../controllers/productsController');



    

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', upload.any(), productsController.create) 
router.post('/', productsController.store); 


// /*** GET ONE PRODUCT ***/ 
 router.get('/:id/', productsController.detail);  

// /*** EDIT ONE PRODUCT ***/ 
 router.get('/edit/:id/', productsController.edit)
 router.patch('/:id', productsController.update)


// /*** DELETE ONE PRODUCT***/ 
 router.delete('/:id', productsController.destroy)


module.exports = router;
