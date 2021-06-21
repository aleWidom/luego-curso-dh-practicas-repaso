const express = require('express');

const router = express.Router()

const apiProductsController = require('../../controllers/api/productsController');

router.get('/latest', apiProductsController.latest );
router.get('/offers', apiProductsController.offers );
router.get('/all', apiProductsController.products );
router.get('/categories/:subcategories?', apiProductsController.categories);

module.exports = router;