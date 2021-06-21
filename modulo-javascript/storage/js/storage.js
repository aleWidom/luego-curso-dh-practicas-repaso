let enlace = document.querySelector('.enlaces')



enlace.addEventListener('click', () => {

    //obtengo input busqueda
    let campoBusqueda = document.querySelector('#search')

    //obtengo input cantidad
    let campoCantidad = document.querySelector('#quantity')

    //guardo lo que viene como valor en el campo
    let queSeBusco = campoBusqueda.value
    let cantidadQueSeBusco = campoCantidad.value

    //realizo busqueda
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=4dCxgrkmfervZbmAV7jzBC7xNuejZUCR&q=${queSeBusco}&limit=${cantidadQueSeBusco}&offset=0&rating=g&lang=en`)
        //primer then del fetch
        .then((response) => {
            return response.json()
        })
        //segundo then del fetch
        .then((resultado) => {

            //obtengo cantidad de resultados que viene del array
            let arrayResultados = resultado.data

            //reemplazo el contenido que hay en el form con etiqueta h1 con el título y una ul
            document.querySelector('form').innerHTML = `<h1>Resultado para el término buscado: ${queSeBusco}</h1><ul class="listaDesordenada"></ul>`

            arrayResultados.forEach(element => {
                //por cada iteracion sumo al html una lista con un h2 e imagen e icono estrella según lo que viene el la busqueda del fetch
                document.querySelector('.listaDesordenada').innerHTML +=
                    `<li class="lista">
        <i class="fas fa-star"></i>
        <h2>${element.title}</h2>
        <br/>
        <img src=${element.images.original.url}/>
        </li>`
            });


            //selecciono todas las etiquetas con clase .fa-star
            let star = document.querySelectorAll('.fa-star')


            //selecciono todas las etiquetas con clase .lista
            let lista = document.querySelectorAll('.lista')

            //declaro arrayFavoritos 
            let arrayFavoritos;


            //si en local storage de nombre gifFavoritos no hay nada
            if (localStorage.getItem('gifFavoritos') == null) {
                //incializo variable arrayFavoritos
                arrayFavoritos = [];
            } else {
                //parseo lo que se encuentra en gifFavoritos
                arrayFavoritos = JSON.parse(localStorage.getItem('gifFavoritos'));
            }

            

            // ciclo
            star.forEach((iterator, j) => {
                //por cada iteracion tomo cada estrella
                //por cada iteracion le doy diferente estilos a las estrellas
                iterator.style.color = "red"
                iterator.style.fontSize = "24px"
                iterator.style.cursor = "pointer"

                iterator.addEventListener('click', function () {

                    arrayResultados.forEach((element, i) => {
                        //si i == j 
                        if (i == j) {
                            //agrego a arrayFavoritos el elemnto id
                            arrayFavoritos.push(element.id)
                        }

                    })
                  
                    //paso a String lo qu hay en el array de favoritos
                    let arrayFavoritosString = JSON.stringify(arrayFavoritos)

                    //seteo la informacion en storage
                    localStorage.setItem('gifFavoritos', arrayFavoritosString)

                })



            })
        })
        .catch((error) => {
            console.log(error)
        })
})