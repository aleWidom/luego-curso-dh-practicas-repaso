const express = require('express');

const router = express.Router()

const apiProductsController = require('../../controllers/api/productsController');

router.get('/latest', apiProductsController.latest );
router.get('/offers', apiProductsController.offers );
router.get('/categories/:subcategories?', apiProductsController.products);

module.exports = router;