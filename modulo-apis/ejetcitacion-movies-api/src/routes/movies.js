var express = require('express');
var router = express.Router();
const MoviesController = require('../controllers/MoviesController');

/* Crud Peliculas */
router.get('/', MoviesController.allMovies);
//router.get('/recommended', MoviesController.recommended);
//router.get('/news', MoviesController.news);
router.get('/create', MoviesController.create)
//router.get('/search', MoviesController.search)
router.get('/:id', MoviesController.show);
router.get('/:id/edit', MoviesController.edit);


/*router.post("/:id/actor", MoviesController.addActor);*/
//router.patch("/:id/actor/:actor_id", MoviesController.updateActor);
//router.delete("/:id/actor/:actor_id", MoviesController.removeActor);


module.exports = router;
