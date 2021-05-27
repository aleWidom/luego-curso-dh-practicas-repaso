 //utilizo fetch y me conecto al endpoint de la api
 fetch('https://api.giphy.com/v1/gifs/random?api_key=4dCxgrkmfervZbmAV7jzBC7xNuejZUCR&tag=riverplate&rating=g')
     //utilizo then por ser una promesa
     .then((response) => {
         //retorno response.jsnon
         return response.json()
     })
     //utilizo segundo then para trabajar con el resultado
     .then((resultado) => {
         //guardo en variables lo que necesito de la api
         let title = resultado.data.title
         let imgUrl = resultado.data.image_url


         //capturo el body y le ingreso lo siguiente dentro del innerHTML. Ingreso en el src la variable que tengo den imgUrl
         document.querySelector('body').innerHTML = `<h1>${title}</h1><img src="${imgUrl}"/><br/><button class="enlace">Nuevo gif</button>`

         //guardo en una variable el boton
         let button = document.querySelector('.enlace')

         button.style.cursor = "pointer"

         //si hace click
         button.addEventListener('click', function () {
             fetch('https://api.giphy.com/v1/gifs/random?api_key=4dCxgrkmfervZbmAV7jzBC7xNuejZUCR&tag=riverplate&rating=g')
                 .then((response) => {
                     //retorno response.jsnon
                     return response.json()
                 })
                 .then((resultado) => {
                     //guardo en variables lo que necesito de la api
                     let title = resultado.data.title
                     let imgUrl = resultado.data.image_url


                     //capturo el body y le ingreso lo siguiente dentro del innerHTML. Ingreso en el src la variable que tengo den imgUrl
                     document.querySelector('body').innerHTML = `<h1>${title}</h1><img src="${imgUrl}"/>`
                 })
                 //por si hay errores
                 .catch((error) => {
                     console.log(error)
                 })
         })



     })
     //por si hay errores
     .catch((error) => {
         console.log(error)
     })


            
     