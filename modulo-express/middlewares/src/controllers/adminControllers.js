module.exports = {
    index: (req,res) => {
        //envío como respuesta el render del index
        res.render("index")
    },
    admin: (req,res) => {
        //envío como respuesta el render admin
        res.render("welcome")
    }
}