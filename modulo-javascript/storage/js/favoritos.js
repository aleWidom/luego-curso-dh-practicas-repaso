//capturo etiqueta con ul
let ul = document.querySelector('.ul');

//guardo en variable local lo que viene de gifFavoritos de localStorage
let local = sessionStorage.getItem('gifFavoritos');

/* //parseo la variable
let localParse = JSON.parse(local);

//hago un ciclo por cada elemento en localParse
for (const iterator of localParse) {
    //agrego dentro de la etiqueta ul una lista con el elemento que esta iterando
    ul.innerHTML += `<li>${iterator}}</li>`
}




 */