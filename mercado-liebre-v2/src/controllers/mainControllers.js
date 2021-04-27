//para poner separador miles a los precios


//requiero modulo fs
const fs = require('fs');


//requiero modulo path
const path = require('path');
const { stringify } = require('querystring');

//ruta archivo de productos.json
const products = path.resolve('.', 'src', 'data', 'productsDataBase.json')

//lectura del archivo
const listadoProductos = fs.readFileSync(products, {encoding:'utf-8'})

//se convierte a archivo para poder usarlo en javascript
const listadoProductosParseado = JSON.parse(listadoProductos)


module.exports = {
    root: (req, res) => {
      

      //declaro e inicializo la variable ofertas y ultimosVisitados como un array vacio
      let ultimosVisitados = [];
      let ofertas= [];
     
   
      //realizo un ciclo sobre el listado de productos
      listadoProductosParseado.forEach((element) => {
            //si el producto tiene como categoria "visited", lo agrego en el array de ultimosVisitados
            if(element.category == "visited") {
                ultimosVisitados.push(element)
                
                //creo una propiedad dentre del objeto agregado y le asigno el precio - (el precio * el descuento). Para que me de el precio total ya con el descuento. 
                element.priceDiscount = element.price - (element.price * (element.discount/100))


            
            }
            //si el producto tiene como categoria "in-sale", lo agrego en el array de in-sale
            else {
                ofertas.push(element)
                //creo una propiedad dentre del objeto agregado y le asigno el precio * el descuento. Para que me de el precio total ya con el descuento. 
                element.priceDiscount = element.price - (element.price * (element.discount/100))
            }
      })


      //Envío como respuesta la vista index y los arrays ultimosVisitados y ofertas
      res.render('index', {ultimosVisitados,ofertas})   
}
}

