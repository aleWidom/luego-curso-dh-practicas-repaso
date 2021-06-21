let url = document.URL;

let urlRecortada =url.slice(29)

console.log(urlRecortada)

fetch(`/apimovies/${urlRecortada}`)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
    document.querySelector('.title').innerHTML = `${data.data.title}`
    document.querySelector('.list-film').innerHTML =`
    <li>Awards: ${data.data.awards}</li>
    <li>Length: ${data.data.length}</li>
    <li>Release Date: ${data.data.release_date}</li>
    <li>Género: ${data.data.genre.name}</li>
    `


})
.catch((error) => {
    console.log(error)
})