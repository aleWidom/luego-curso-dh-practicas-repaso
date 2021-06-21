
const path = require('path')

module.exports = {
    root: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    }
}