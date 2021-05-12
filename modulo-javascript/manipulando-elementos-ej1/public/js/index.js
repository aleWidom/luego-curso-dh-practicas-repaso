//realizo un alert con la Bienvenida a mi sitio
alert("Bienvenidos a mi sitio")

let decisionUsuario = confirm("¿Esta seguro que desea avanzar?")

//si la variable decisionUsuario es true
if (decisionUsuario == true) {

    //capto h2 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h2').innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio."

    //guardo nombre según lo que viene del prompt
    let nombre =prompt("Cual es su nombre")

    //capto h1 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h1').innerHTML = `Bienvenido ${nombre}`

    //guardo en la variable edad el resultado del prompt
    let edad = prompt('¿Cual es tu edad?')

    //si es menor a 18
    if(edad < 18) {
        //selecciono el elemento que tiene la clase .container-general y lo oculto
        document.querySelector('.container-general').style.display = "none"
        //selecciono el elemento que tiene el id accesoDenegado y lo muestro
        document.querySelector('#accesoDenegado').style.display = "block"
    } // si es mayor a 18
    else {
       //guardo en la variable hobbies lo que me contestan en el prompt y a través del metodo split lo transformo en array
       let hobbies  = prompt("¿Cuales son tus hobbies, separalos por comas?").split(' ')
       console.log(hobbies)

       //inicializo la variable
       let gustaProgramacion;

       //realizo un ciclo sobre los hobbies
       for (const hobbie of hobbies) {
           //si dentro de los hobbies se encuentra dentro de unas palabras
           if (hobbie == "Programación" || hobbie == "Programacion" || hobbie == "Programar") {
            //le asigno el valor true si encuentra la palabras
            gustaProgramacion = true
           } //si no se encuentra la palabra
           else {
            //le asigno el valor false si no encuentra la palabras
            gustaProgramacion = false
           }
           }

           //si gustaProgramacion es true
            if (gustaProgramacion) {
            //creo un alert
            alert("Qué bueno que te guste la programación.")
            } //si no te gusta la programacion
            else {
            //creo un alert
            alert("Qué lástima que no te guste la programación") 
        }
    }

    
    /* ) Anteriormente guardamos los hobbies del usuario. Te pedimos que generes un listado ordenado (<ol>) con los primeros 3 hobbies (en caso de haber) y lo insertes dentro de la etiqueta <article> de clase “hobbies”.  */

            let contadorHobbies = 0;

            for (const hobbie of hobbies) {
                if (contadorHobbies == 3) {
                //crear un elemento
                document.createElement()
                contadorHobbies++
            }
            }
  








} //si la variable decisionUsuario es false
else {
    //capto h2 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h2').innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}


