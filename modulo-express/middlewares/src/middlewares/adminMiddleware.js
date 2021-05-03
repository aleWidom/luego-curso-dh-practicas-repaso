
function adminMiddleware (req, res, next) {
    //si el nombre que llega por req.query es igual a cualquiera de estos podés ingresar
    if(req.query.name == "Ada" ||  req.query.name == "Greta"  || req.query.name == "Vim" ||  req.query.name == "Tim"  ) {
        next()
     //sino no tenés permiso   
    } else {
        res.send('No tienes los privilegios para ingresar')
    }
    
    
 
}

module.exports = adminMiddleware;