//requiero fs
let fs = require('fs')
//requiero path
let path = require('path')


//ruta
let ruta = path.resolve('.','logs', 'userLogs.txt') 

function userLogsMiddleware (req, res, next) {

     // declaro e inicializo la variable texto
      let texto = "El usuario ingresó a la ruta: " + req.url + ", "

      //sobreescribo lo que hay en el archivo que traigo en la ruta con la variable texto
      fs.appendFileSync(ruta, texto )

      //con esto hago que continue al controlador
      next()
 
}

module.exports = userLogsMiddleware;