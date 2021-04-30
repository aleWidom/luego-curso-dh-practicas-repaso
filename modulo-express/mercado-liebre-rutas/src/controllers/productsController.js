const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");




const controller = {
	// Root - Show all products
	index: (req, res) => {
		//realizo un ciclo sobre products
		products.forEach(element => {
			//creo una nueva propiedad al objeto a la que le asingo el precio - el descuento
			element.priceDiscount = element.price - (element.price * (element.discount / 100))
		});

		//renderizo la vista de productos, y me llevo a la vista todos los productos
		res.render('products', {products})
		
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		//declaro la variable product
		let product;



		//realizo un ciclo sobre la variable products que contiene todos los productos
		products.forEach(element => {
			//hago un condicional para captar que lo que viene de la ruta parametrizada sea igual al id del objeto
			if(req.params.id == element.id) {
				//asigno a product el elemento que coincida con la condición
				product = element

				//creo una nueva propiedad al objeto a la que le asingo el precio - el descuento
				element.priceDiscount = element.price - (element.price * (element.discount/100))


			    //renderizo la vista detail, y me llevo a la vista la variable product
				res.render('detail', {product})

			}  
		});

		//Si no encuentra objeto que contenga id igual al que llega por el req.params la variable product sería undefined entonces respondo "No encontramos id que coincida con el id del producto"	
		if(product == undefined) {
		res.send("No encontamos id que coincida con el id del producto")
		}
	
	},

	// Create - Form to create
	create: (req, res) => {
		//renderizo la vista de product-create-form
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
		//agrego al array products lo que llega del formulario
		products.push(req.body)

		//declaro e inicializo la variable productsString y le asigno como valor la variable productos pasada a texto
		let productsString = JSON.stringify(products)
		
		//reescribo json con la info nueva
		fs.writeFileSync(productsFilePath, productsString)

		//re dirigo a la ruta raíz.
		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req, res) => {

		//declaro la variable product
		let product;

		//realizo un ciclo sobre la variable products que contiene todos los productos
		products.forEach(element => {
		//hago un condicional para captar que lo que viene de la ruta parametrizada sea igual al id del objeto
		if(req.params.id == element.id) {
			//asigno a product el elemento que coincida con la condición
			product = element
			//renderizo la vista de product-edit-form y me llevo la variable product
			res.render('product-edit-form', {product})
		}});

			
		//Si no encuentra objeto que contenga id igual al que llega por el req.params la variable product sería undefined entonces respondo "No encontramos id que coincida con el id del producto"	
			if(product == undefined) {
				res.send("No encontamos id que coincida con el id del producto")
			}
			

	},
	// Update - Method to update
	update: (req, res) => {
		
		//realizo un ciclo sobre la variable products que contiene todos los productos
		products.forEach(element => {
		//hago un condicional para captar que lo que viene de la ruta parametrizada sea igual al id del objeto
		if(req.params.id == element.id) {
		//reemplazo valores del objeto que ingreso al condicional y lo reemplazo por lo que viene en el req.body
		element.name  = req.body.name;
		element.price = req.body.price;
		element.discount = req.body.discount;
		element.category = req.body.category;
	    element.description = req.body.description;
	}  
		});

		//declaro e inicializo la variable productString y le asigno la variable products como texto.
		let productString = JSON.stringify(products)
		//sobreescribo el json con la variable productString
		fs.writeFileSync(productsFilePath, productString)





		//redirigo al home del sitio
		res.redirect('/')
	
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		//declaro e inicializo la variable product como un array vacio
		let product = []

			//realizo un ciclo sobre la variable products 
		    products.forEach((element) => {
			//realizo un condicional
			if(element.id != req.params.id) {
				//si se cumple con la condición de que el id del objeto sea distinto al req.params lo agregue al array de product
				product.push(element)
			}
			
		})

		//declaro e inicializo la variable productsTotalString y le guardo la variable product pasada en string
		let productsTotalsString = JSON.stringify(product) 

		//sobreescribo el json con la variable productsTotalString
		fs.writeFileSync(productsFilePath, productsTotalsString)

		//redirigo al home del sitio
		res.redirect('/')

	}
};

module.exports = controller;