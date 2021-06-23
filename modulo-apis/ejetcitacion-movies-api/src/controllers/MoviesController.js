
let path = require('path');
/*
async function getAvailableActorsAndMapToSelectOptions(movie) {
    const movieActorsIds = movie.actors.map((actor) => {
        return actor.id;
    });
    const availableActors = await db.Actors.findAll({
        where: {
            id: {
                [Op.notIn]: movieActorsIds,
            },
        },
    });

    return availableActors.map((actor) => {
        return { id: actor.id, label: `${actor.first_name} ${actor.last_name}` };
    });
}*/

module.exports = {
    allMovies: (req,res)=>{
        res.sendFile(path.join(__dirname, '..', 'views', 'movies.html'))
    },
    show: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'show.html'))
    },

    create: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'create.html'))
    },
    edit: async (req,res)=> {
        res.sendFile(path.join(__dirname, '..', 'views', 'edit.html'))
    }, /*
    recommended: (req,res)=>{
        db.Movies.findAll({
            where: {
                awards: { [Op.gt]: 4 }
            },
            order: [['awards']]
        })
        .then(movies => res.render('movies/recommended',{movies}));
    },
    news: (req,res)=>{
        db.Movies.findAll({
            order: [
                ['release_date','DESC']
            ],
            limit:5
        })
        .then(movies => res.render('movies/news',{movies}));
    },
    search: (req,res) => {
        let search = req.query.q
        db.Movies.findAll({
            where: {
                title : {[Op.like]:'%'+ search+'%'}
            }
        })
        .then(movies => res.render('movies/search',{movies, search}));
    },
    addActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.body.actor_id);
        await movie.addActors(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },
    updateActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.params.actor_id);
        console.log(req.body.screentime);
        await movie.addActors(actor, {
            through: {
                screentime: req.body.screentime,
            },
        });
        res.redirect("back");
    },
    removeActor: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id);
        const actor = await db.Actors.findByPk(req.params.actor_id);
        movie.removeActor(actor);
        res.redirect("back");
    },*/
}