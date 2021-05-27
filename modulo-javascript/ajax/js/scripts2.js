//pregunto al usuario cuantos gifs desea ver
let cuantosGifs = prompt("Cuantos gifs desea ver")

//me conecto mediante fetch a la api y pongo de busqueda lo que ingreso el usuario de cuantos gifs quiere ver
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=4dCxgrkmfervZbmAV7jzBC7xNuejZUCR&limit=${cuantosGifs}&rating=g`)
//primer then del fetch
.then((response)=> {
    return response.json()
})
//segundo then del fetch
.then((resultado)=> {

    //guardo en una variable el array con la data que viene de la api
    let arrayResultados = resultado.data 

    //hago un ciclo del array
    arrayResultados.forEach(element => {
       //en cada iteracion le agrego al body de inner html un h2 y una imagen con lo que viene de la api 
       document.querySelector('body').innerHTML += `<h2>${element.title}</h2><br/><img src="${element.images.original.url}"/><br/>`
    });
})
//si hay errores
.catch((err)=> {
    console.log(err)
})
