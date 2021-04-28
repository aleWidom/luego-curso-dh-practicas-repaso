//requiero modulo path
let path = require('path')
//utilizo el path.resolve para saber la ruta en cualquier pc o mac
let ruta = path.resolve('.', 'data','heroes.json')
//requiero el modulo fs
let fs = require('fs')

//leo el archivo
let lectura = fs.readFileSync(ruta, {encoding:"utf-8"})
//paso a formato para poder manipular lo que lei y jugar con javascript
let lecturaParseada = JSON.parse(lectura)

module.exports = {
    index: (req,res) => {
        //Envio texto como respuesta.
        res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio")
    },
    heroes: (req,res) => {
        //Envío el arhcivo que parsee como respuesta.
        res.send(lecturaParseada)
    },
    detail: (req,res) => {
        //declaro la variable saludo y existo
        let saludo;
        let existo;

        //realizo un ciclo forEach sobre la variable lecturaParseada
        lecturaParseada.forEach(element => {
        //si el id del elemento coincide con el numero de la ruta parametrizada    
        if(element.id == req.params.id) {
            //inicializo la variable saludo y existo con tales valores
            saludo = `Hola, mi nombre es ${element.nombre} y soy ${element.profesion}`
            existo = "Existo"
            //envío como respuesta la variable saludo
            res.send(saludo)
    }   
    })

        //si la variable no fue inicializada
        if (existo == undefined) {
            //le asigno a saludo tal valor
            saludo = `No tenemos en nuestra base ningún héroe ni heroína con ese id`
            //Envío como respuesta la variable saludo
            res.send(saludo)
        }
    },
    resenia: (req,res) => {
        //declaro la variable existo
        let existo;

        //realizo un ciclo forEach sobre la variable lecturaParseada
        lecturaParseada.forEach((element) => {
               //si el id del elemento coincide con el numero de la ruta parametrizada  
            if(element.id == req.params.id) { 
               //si en el objeto req.params las propiedades resenia o tipo de valor tienen undefined
                if (req.params.resenia == undefined || req.params.tipo == undefined) {
                    //inicializo la variable existo asignandole como valor la propiedad resenia del objeto que coincide con el id de dicho objeto y el numero que vino en la ruta parametrizada. A eso se la transforma a través del split en un array. 
                    existo = element.resenia.split(' ')
                    //se declara e inicializa la variable recorte a la que se le asigna el corte del array de la variable existo desde la posición 0 a la 30
                    let recorte = existo.slice(0,30)
                    //se declara e inicializa la variable union y se le asigna como valor juntar y transformar en string lo que venia de la varialbe recorte (array de 0 a 30)
                    let union = recorte.join(" ")
                    //Envío como respuesta el nombre del objeto que cumple con la condición que coincide con el id de dicho objeto y el numero que vino en la ruta parametrizada, y la variable union
                    res.send(`${element.nombre}, ${union}.`)       
                } 

                //si en el objeto req.params las propiedades resenia o tipo vienen con valor
                else {
                    //se inicializa la variable existo con tal valor
                    existo = `Hola, mi nombre es ${element.nombre}. ${element.resenia}`
                    //Envío como respuesta la variable existo
                    res.send(existo)
                }
            }
        })


        //si existo sigue siendo undefined es que no existe un objeto con el id llegado en la ruta parametrizada.
        if (existo == undefined) {
            //Envío como respuesta
            res.send(`No tenemos en nuestra base ningún héroe ni heroína con ese id`)
        }
    },
    creditos: (req, res) => {
          //Envío como respuesta
        res.send(`Realizado por Alejandro Mario Widomlanski`)
    }
}




