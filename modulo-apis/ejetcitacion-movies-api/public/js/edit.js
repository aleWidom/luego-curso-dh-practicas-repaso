
let url = document.URL

let urlRecortada = url.slice(29,30)


let title = document.querySelector('.title');
let awards= document.querySelector('.awards');
let genre = document.querySelector('.genre');
let release = document.querySelector('.release');
let revenue = document.querySelector('.revenue');
let length = document.querySelector('.length');

fetch(`http://localhost:3000/apimovies/${urlRecortada}`)
    .then((response) => {
        return response.json()
    })
    .then((data)=> {

        genre.innerHTML = `<option  class="option" value="${data.data.genre_id}">${data.data.genre.name}</option>`
        title.value = `${data.data.title}`;
        awards.value = `${data.data.awards}`;



        fetch(`http://localhost:3000/apimovies/genre`)
            .then((response) => {
                return response.json()
            })
            .then((info) => {
                for (const infoElement of info.data) {
                    genre.innerHTML += `<option  value="${infoElement.id}">${infoElement.name}</option>`
                }
            })
            .catch((error) => {
                console.log(error)
            })

    })
    .catch((error) => {
        console.log(error)
    })





document.querySelector('.save-as').addEventListener('click', (e) => {

    let data = {
        "title": title.value,
        "awards": awards.value,
        "genre": genre.value,
        "release": release.value,
        "revenue": revenue.value,
        "length": length.value
    }

    e.preventDefault()

    console.log(data)

/*
    fetch(`/apimovies/${urlRecortada}`,{
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resultado) => {
            console.log(resultado)
        })
        .then((error) => {
            console.log(error)
        })*/
})