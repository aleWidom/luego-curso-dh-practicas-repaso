fetch('http://localhost:3000/apimovies/genre')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.data)
        for (const element of data.data) {
            document.querySelector('.genre').innerHTML +=  `
                <option value="${element.id}">${element.name}</option>`
        }
    })
    .catch((error) => {
        console.log(error)
    })


document.querySelector('.send').addEventListener('click', (e)=> {

    e.preventDefault()

    let title = document.querySelector('.title').value
    let awards= document.querySelector('.awards').value
    let length= document.querySelector('.length').value
    let release = document.querySelector('.release').value
    let revenue = document.querySelector('.revenue').value
    let genre = document.querySelector('.genre option').value

    let data = {
        "title": title,
        "awards": awards,
        "length": length,
        "release": release,
        "revenue": revenue,
        "genre": genre,
    }

    console.log(data)


    fetch('/apimovies',{
        method: 'POST',
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
        })
})