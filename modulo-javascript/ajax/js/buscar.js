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
        //por cada iteracion sumo al html una lista con un h2 e imagen según lo que viene el la busqueda del fetch
        document.querySelector('.listaDesordenada').innerHTML += 
        `<li>
        <h2>${element.title}</h2>
        <br/>
        <img src=${element.images.original.url}/>
        </li>`
    });





})
.catch((error) => {
    console.log(error)
})







})


