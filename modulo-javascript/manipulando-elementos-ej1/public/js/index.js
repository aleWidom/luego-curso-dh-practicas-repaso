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

    let edad = prompt('¿Cual es tu edad?')

    if(edad > 18) {
        
    }



} //si la variable decisionUsuario es false
else {
    //capto h2 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h2').innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}


