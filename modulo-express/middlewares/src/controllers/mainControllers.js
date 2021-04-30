module.exports = {
    index: (req,res) => {
        res.send("hola")
    },
    products: (req,res) => {
        console.log()
        res.send("chau")
    }
}