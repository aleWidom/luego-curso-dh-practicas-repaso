// ******** Sequelize ***********

const { Product, Sequelize, Brand, Category } = require('../../database/models');
const Op = Sequelize.Op;

const fun = require('./prueba')

module.exports = {
    latest: (req, res) => {
        const ultimos = Product.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 8
        })
        .then((data) => {

            let respuesta = {
                "meta": {
                    "status": 200,
                    "count": data.length,
                    "url": "api/products/latest"
                },
                "data": data
            }



            res.json(respuesta);
        })
            .catch((error) => {
                console.log(error);
            })
    },
    offers: (req, res) => {
        const inSale = Product.findAll({
            where: {
                discount: {
                    [Op.gt]: 0
                }
            },
            limit: 8
        })
            .then((data)=> {
                let respuesta = {
                    'meta': {
                        status: 200,
                        cant: data.length,
                        url: 'api/products/offers'
                    },
                    data: data
                }

                res.json(respuesta);

            })
            .catch((error) => {
                console.log(error);
            })
    },
    products: (req,res) => {
        Category.findAll({
            }

        )
            .then((data) => {

                let prueba;

                let nombreSaludo;

                nombreSaludo = fun("Ale");

                let numero;

                numero=5;

                let nombre = "Alejandro"


                nombre = "Mario"


                let respuesta = {
                    "meta": {
                        "status" : 200,
                        "count" : data.length,
                        "url": 'api/products/categories'
                    },
                    data: data
                }
                res.json(respuesta)

                let variableVacia;

            })
            .catch((error) => {
                console.log(error);
            })
    }


}