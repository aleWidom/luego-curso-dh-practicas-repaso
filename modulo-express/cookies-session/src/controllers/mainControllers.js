module.exports = {
    root: (req, res) => {
        //renderizo la vista index, y llevo objeto con title
        res.render('index', { title: 'Express' })
    },
    color: (req, res) => {
        //guardo en session el color elegido
        req.session.color = req.query.color;

        //declaro e inicializo la variable y le asigno el valor de la session
        let colorElegido = req.session.color 
     
        //si el botón es distinto a undefined creo la cookie con el nombre prueba y le guardo la variable
        if(req.query.recordar_color != undefined) {
                       //nombre    //variable   //tiempo
            res.cookie('prueba', colorElegido, {maxAge: 120000} ) 
        }

        res.render('color', {colorElegido})
    },
    session: (req, res) => {
        //asigno el color que se encuentra en session
        let colorElegido = req.session.color
        //renderizo la vista color-session, y me llevo la variable a la vista
        res.render('color-session', {colorElegido})
    },
    borrar: (req, res) => {
        //elimino session 
        req.session.destroy();
        //elimino cookie prueba
        res.clearCookie("prueba")
        //redirigo a la raiz una vez que se destruyo la session y cookie
        res.redirect('/')
    }
}