//realizo un alert con la Bienvenida a mi sitio
alert("Bienvenidos a mi sitio")

let decisionUsuario = confirm("¿Esta seguro que desea avanzar?")

//si la variable decisionUsuario es true
if (decisionUsuario == true) {

    //capto h2 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h2').innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio."

    //guardo nombre según lo que viene del prompt
    let nombre = prompt("Cual es su nombre")

    //capto h1 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h1').innerHTML = `Bienvenido ${nombre}`

    //guardo en la variable edad el resultado del prompt
    let edad = prompt('¿Cual es tu edad?')

    //si es menor a 18
    if (edad < 18) {
        //selecciono el elemento que tiene la clase .container-general y lo oculto
        document.querySelector('.container-general').style.display = "none"
        //selecciono el elemento que tiene el id accesoDenegado y lo muestro
        document.querySelector('#accesoDenegado').style.display = "block"
    } // si es mayor a 18
    else {
        //guardo en la variable hobbies lo que me contestan en el prompt y a través del metodo split lo transformo en array
        let hobbies = prompt("¿Cuales son tus hobbies, separalos por comas?").split(' ')
        console.log(hobbies)

        //inicializo la variable
        let gustaProgramacion;

        //realizo un ciclo sobre los hobbies
        for (const hobbie of hobbies) {
            //si dentro de los hobbies se encuentra dentro de unas palabras
            if (hobbie == "Programación" || hobbie == "Programacion" || hobbie == "Programar") {
                //le asigno el valor true si encuentra la palabras
                gustaProgramacion = true
            }
        }

        //si gustaProgramacion es true
        if (gustaProgramacion) {
            //creo un alert
            alert("Qué bueno que te guste la programación.")

            //capturo la etiqueta que tiene la clase background-img 
            let backgroundImg = document.querySelector('.background-img')
            //a esa etiqueta le cambio donde debe buscar la url de la imagen
            backgroundImg.style.backgroundImage = "url(../img/programmer.jpeg)";

        } //si no te gusta la programacion
        else {
            //creo un alert
            alert("Qué lástima que no te guste la programación")

            //capturo la etiqueta que tiene la clase background-img 
            let backgroundImg = document.querySelector('.background-img')
            //a esa etiqueta le cambio donde debe buscar la url de la imagen
            backgroundImg.style.backgroundImage = "url(../img/gatito.jpeg)";
        }



        let contadorHobbies = 0;

        //creo un elemento ol
        let ol = document.createElement('ol')
        //agrego la clase ol a la ol creada
        ol.classList.add("ol")

        //capturo etiqueta con clase hobbies
        let articleCapture = document.querySelector('.hobbies')

        //anexo como hijo a la etiqueta que tiene hobbies la ol creada anteriormente
        articleCapture.appendChild(ol)


        //Guardo en la variable colorPreferido lo que viene del prompt
        let colorPreferido = prompt('Ingrese su color favorito')

        //declaro e inicializo la variable urlHobbie
        let urlHobbie;


        for (const hobbie of hobbies) {

            //si el hobbie en caracteres es mayor a 5 y menor a 10
            if (hobbie.length > 5 && hobbie.length < 10) {

                //si el contador de hobbies es menor a 3
                if (contadorHobbies < 3) {

                    //guardo en la variable  urlHobbie lo que me viene del prompt
                    urlHobbie = prompt('Por favor ingrese una Url donde podamos encontrar sus hobbies')


                    //dentro de cada etiqueta ol le agrego una etiqueta li que contenga una a con lo que ingreso el usuario como url y dentro cada hobbie
                    ol.innerHTML += `<li></li>`


                    //sumo 1 por cada iteración
                    contadorHobbies++
                }
            }
        }


        //se seleccion la lista que se encuentra dentro de la etiqueta con clase ol
        let cadaLi = document.querySelectorAll('.ol li')

        //declaro e incializo en 0 la variable i
        let i = 0

        for (const iterator of cadaLi) {
            //agregamos htmk a cada li 
            iterator.innerHTML = `<a href="${urlHobbie}">${hobbies[i]}</a>`
            i++

            
            //agrego un estilo a cada lista
            iterator.style.textAlign = "center"

        }


        //se selecciona el enlace que se encuentra dentro de la etiqueta con clase ol y la etiqueta li
        let cadaA = document.querySelectorAll('.ol li a')


        //ciclo
        for (const iterator of cadaA) {
            //agrego un estilo a cada enlace sin textDecoration
            iterator.style.textDecoration = "none"
           //agrego un estilo a cada enlace el color
            iterator.style.color = `${colorPreferido}`
        }
     }




        //Segunda tanda de ejercicios

        //Guardo en la variable nombre lo que viene del prompt
        nombre = prompt('Me repite su nombre por favor')

        //capturo el h1 que se encuentra dentro de la etiqueta que tiene clase bienvenida
        let capturaH1 = document.querySelector('.bienvenida h1')
        //a la etiqueta que capture le agrego el Bienvenido y lo que ingrese el usuario como nombre entre etiquetas span
        capturaH1.innerHTML = `Bienvenido <span>${nombre}</span>`

        //capturo el span que se encuentra dentro de la etiqueta que tiene clase bienvenida y dentro del h1
        let spanCapture = document.querySelector('.bienvenida h1 span')
        //le agrego la clase colorPreferido a la variable spanCapture
        spanCapture.classList.add('colorPreferido')


        //caputuro la etiqueta con clase avatar
        let avatar = document.querySelector('.avatar')
       
        //guardo en ruta lo que escribe el usuario
        let ruta = prompt('Ingrese una ruta ej img/avatar.png')

        //seteo en el atributo src de la variable avatar la ruta que escribio el usuario
        avatar.setAttribute('src', ruta)

    }
 //si la variable decisionUsuario es false
else {
    //capto h2 que se encuentra dentro de un contenedor que tiene la clase bienvenida
    document.querySelector('.bienvenida h2').innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}