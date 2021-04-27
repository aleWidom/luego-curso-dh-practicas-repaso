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

       //declaro la variable product 
       let product; 

      //realizo ciclo sobre el listado de productos 
      listadoProductosParseado.forEach((element) => {
        //si en el array el producto tiene el mismo id del que viene en el req.params.id  
        if (element.id == req.params.id) {
            //asigno a product el producto que coincide
            product = element
        }     
      })

      //creo una propiedad dentre del objeto agregado y le asigno el precio - (el precio * el descuento). Para que me de el precio total ya con el descuento. 
      product.priceDiscount = product.price - (product.price * (product.discount/100))

      console.log(product)

      res.render("product-detail", {product})
      
}
}

