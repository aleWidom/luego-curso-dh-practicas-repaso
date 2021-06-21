fetch('/apimovies')
.then((response) => {
    return response.json()
})
.then((data) => {

    for (const element of data.data) {
        document.querySelector('.ul').innerHTML += `
        <li><a href="/movies/${element.id}">${element.title}</a></li>
    `}

})
.catch((error) => {
    console.log(error)
})