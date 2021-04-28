const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
	index: (req, res) => {

		//declaro las variables ofertas y ultimosVisitados como arrays vacios.
		let ofertas = []
		let ultimosVisitados = []

		//realizo un ciclo sobre todos los productos
		products.forEach(element => {
			//si el producto tiene como categoria in-sale
			if(element.category == "in-sale") {
				//agrego el elemnto que cumpla la condiciión al array de la variable ofertas
				ofertas.push(element)
			} else {
				//agrego el elemnto que cumpla la condiciión al array de la variable ultimosVisitados
				ultimosVisitados.push(element)
			}
		});

		//renderizo la página del index y me llevo la variables ofertas y ultimosVisitados
		res.render('index', {ofertas, ultimosVisitados})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
