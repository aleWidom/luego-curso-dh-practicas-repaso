//capturo etiqueta con ul
let ul = document.querySelector('.ul');

//guardo en variable local lo que viene de gifFavoritos de localStorage
let local = localStorage.getItem('gifFavoritos');

//parseo la variable
let localParse = JSON.parse(local);


//si no hay nada en storage
if (localStorage.length == 0) {
    //agregar h3 que no se encontraron gifs
    ul.innerHTML += `<h3>No se encontraron gifs</h3>`
} //si hay en storage 
else {
    //hago un ciclo por cada elemento en localParse
    for (const iterator of localParse) {
        //agrego dentro de la etiqueta ul una lista con el elemento que esta iterando
        ul.innerHTML += `<li>${iterator}}</li>`
    }
}