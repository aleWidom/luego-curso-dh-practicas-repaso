function cookieMiddleware(req, res, next) {

    //si existe una cookie con nombre prueba y la session color no existe
    if (req.cookies.prueba != undefined && req.session.color == undefined) {
        //asigno a la session la cookie (a este if va a entrar solo una vez si ingresa porque session no va a ser devuelta undefined  )
        req.session.color = req.cookies.prueba
        console.log(12345678)
    }

    next()

}

module.exports = cookieMiddleware;