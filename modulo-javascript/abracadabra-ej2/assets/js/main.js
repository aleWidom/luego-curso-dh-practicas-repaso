//utilizo evento load sobre window
window.addEventListener('load', () => {
    //capturo etiqueta con id abracadabra
    let abracadabra = document.querySelector('#abracadabra')

    //BOTON ABRACADABRA
    //realizo un evento click sobre lo que hay en la variable abracadabra
    abracadabra.addEventListener('click', () => {
        //consulto el nombre y lo guardo
        let nombre = prompt('Ingrese su nombre')

        //capturo etiqueta con id titular
        let titular = document.querySelector('#titular')

        //reemplazo el contenido html. Utilizo el nombre que viene del prompt 
        titular.innerHTML = `Hi. I'm <strong>${nombre}</strong>.`

    })


    //capturo etiqueta con id touch
    let touch = document.querySelector('#touch')

    //   //BOTON GET IN
    // //realizo un evento dobleClick sobre lo que hay en la variable touch
    // touch.addEventListener('dblclick', () => {

    //     //capturo etiqueta con clase parrafo-color
    //     let parrafoColor = document.querySelector('.parrafo-color')

    //     //cambio el estilo de la etiqueta parrafoColor a color rojo
    //     parrafoColor.style.color = 'red'

    // })


    let colorAlAzar = (colores) => {

        //retorno del array de colores la posicion redondeando al entero más bajo lo que me da Math.random ((entre 0 y 1) y en este caso por 4)
        return colores[Math.floor(Math.random() * 4)]

    }

    touch.addEventListener('dblclick', () => {

        //capturo etiqueta con clase parrafo-color
        let parrafoColor = document.querySelector('.parrafo-color')

        //cambio el estilo de la etiqueta parrafoColor con la función colorAlAzar
        parrafoColor.style.color = colorAlAzar(['red', 'blue', 'orange', 'green', 'yellow'])

    })


    //capturo todas las etiquetas que tienen como clase .style1
    let style1 = document.querySelectorAll('.style1')



    for (const iterator of style1) {
        //sobre cada etiqueta con clase style1 agrego un evento click
        iterator.addEventListener('click', function () {
            //tomo el h3 del contenido de cada etiqueta con clase style1
            let h3 = iterator.querySelector('h3');

            //si h3 es distinto a null
            if (h3 != null) {
                //tomo el contenido que esta en dicha etiqueta
                let contenidoH3 = h3.innerHTML
                //genero un alerta de donde clickeo 
                alert(`Clickeaste sobre ${contenidoH3}`)
            }


        })
    }


    //capturo todas las etiquetas con clase scrolly
    let buttonSeeSome = document.querySelectorAll('.scrolly')

    //declaro e inciaclizo una variable que me va a servir luego como iterador
    let indiceClase = 0


    //realizo un cilo
    for (const iterator of buttonSeeSome) {
        //cada etiqueta le agrego una clase + el nroIndice por detrás
        iterator.classList.add(`scrolly${indiceClase++}`)
    }


    //capturo la clase que me interesa
    let buttonSee = document.querySelector('.scrolly1');

    //agrego un evento que cuando entre a esa etiqueta cambie el color de su parrafo superior
    buttonSee.addEventListener('mouseover', function () {
        document.querySelector('.footer-portfolio p').style.color = colorAlAzar(['red', 'blue', 'orange', 'green', 'yellow'])
    })

    //agrego un evento que cuando salga a esa etiqueta cambie el color de su parrafo superior
    buttonSee.addEventListener('mouseout', function () {
        document.querySelector('.footer-portfolio p').style.color = "#888888"
    })


    //capturo imagen de lechuza
    let imagenLechuza = document.querySelector('.fit img')

    //genero un evento sobre la imagen de la lechuza al hacer click
    imagenLechuza.addEventListener('click', function () {

        //genero un alerta
        alert('Preparate para el futuro')

        //dispongo los segundos que va a durar
        let seconds = 5000

        //genero set timeout cada 5 segundos
        setTimeout(() => {
            alert('Y el futuro ya llego')
        }, seconds);

    })


    window.addEventListener('keypress', function () {
        //genero alerta
        //  alert("tocaste el teclado")
    })

    //capturo campo email
    let campoEmail = document.querySelector('#email')

    //realizo un evento focus
    campoEmail.addEventListener('focus', function () {

        //una vez que estoy dentr de focus hago un evento con el teclado
        campoEmail.addEventListener('keypress', function (evento) {
            //si el key es la barra espaciadora
            if (evento.key == " ") {
                //no dejo hacer espacio con el preventDefault que es lo que hace esa tecla
                evento.preventDefault()
            }
        })
    })


    //declaro e inicializo variablo estadoSecreto
    let estadoSecreto = 0;

    //realizo un eventos donde voy sumando su se cumple la condiciòn
    window.addEventListener('keypress', function (e) {

        if (e.key == "s") {
            estadoSecreto++;
        }   

        if (e.key == "e" && estadoSecreto == 1) {
            estadoSecreto++
        } 
        
        if (e.key == "c" && estadoSecreto == 2) {
            estadoSecreto++
        }   
        
        if (e.key == "r" && estadoSecreto == 3) {
            estadoSecreto++
        } 

        if (e.key == "e" && estadoSecreto == 4) {
            estadoSecreto++
        }   

        if (e.key == "t" && estadoSecreto == 5) {
            estadoSecreto++
        }  

        if (e.key == "o" && estadoSecreto == 6) {
            estadoSecreto = 0
            alert('SECRETO MAGICO')
        }

    }) 


    //con floor() redondeo para bajo el numero generado en radom y lo guardo en una variable
    let nroGanador = Math.floor(Math.random() * 6)

    let gradient = document.querySelectorAll('#portfolio .featured')

   //realizo un ciclo for
    for (let i = 0; i < gradient.length; i++) {

        //agrego a cada elemento el cursor pointer
        gradient[i].style.cursor = "pointer"

        //agrego un evento click
        gradient[i].addEventListener('click', function() {
           //en el elemento que hace click (posicion gradient[i]), si i es igual al nroGanador (que va de 0 a 5)
            if (i == nroGanador) {
                //alert ganaste
                alert('Ganaste')
            }
            else {
                //alert perdiste
                alert('Perdiste otra vez sera')
            }
        }) 
    }

    })


