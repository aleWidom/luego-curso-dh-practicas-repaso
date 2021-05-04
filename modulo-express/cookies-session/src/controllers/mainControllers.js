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
        res.render('color', {colorElegido})
    },
    session: (req, res) => {
        let colorElegido = req.session.color
        res.render('color-session', {colorElegido})
    }
}