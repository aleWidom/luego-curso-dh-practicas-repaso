
let db = require('../../database/models')

module.exports = {
    root: (req, res) => {
        db.Movies.findAll()
            .then((resultado) => {

                let respuesta = {
                    "meta": {
                        "status": 200,
                        "url": '/apimovies',
                        "count": resultado.length
                    },
                    "data": resultado
                }

                res.json(respuesta)


            })
            .catch((error) => {
                console.log(error)
            })
    },
    genre: (req, res) => {
        db.Genres.findAll()
            .then((resultado) => {
                let respuesta = {
                    "meta": {
                        "status":200,
                        "url": '/apimovies/genre',
                        "count": resultado.length
                    },
                    "data":resultado
                }

                res.json(respuesta)

            })
            .then((error) => {
                console.log(error)
            })
    },
    detail: (req,res ) => {
        db.Movies.findByPk(req.params.id, {
            include: ['genre'],
        }
    )
            .then((resultado) => {
                let respuesta = {
                    "meta": {
                        "status":200,
                        "url": `apimovies/${req.params.id}`,
                    },
                    "data" : resultado
                }

                res.json(respuesta)

            })
            .catch((error) => {
                console.log(error)
            })

    },
    create: (req, res) => {
        db.Movies.create(req.body)
            .then((resultado) => {
                let respuesta = {
                    "meta": {
                        "status": 200,
                        "url": `apimovies`
                    },
                    "data": resultado
                }

                res.json(respuesta)

            })
            .catch((error) => {
                console.log(error)
            })
    },
    edit: (req, res) => {
        db.Movies.update({
            where: req.params.id
        })
            .then((resultado) => {
                let respuesta = {
                    "meta": {
                        "status": 200,
                        "url": `/apimovies/${req.params.id}`
                    },
                    "data": resultado
                }

                res.json(respuesta)

            })
    }
}

