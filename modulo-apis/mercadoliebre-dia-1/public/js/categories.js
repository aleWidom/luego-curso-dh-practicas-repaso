//Busqueda de los últimos productos
fetch('/api/products/latest')
.then((response) => {
    return response.json();
})
//obtengo resultado
.then((resultado) => {

    document.querySelector('.products-container').innerHTML = ""

    let discount;

    //si lo que hay en el array es mayor que 0
    if(resultado.data.length > 0) {
        //realizo ciclo para recorrer array  obtener cada elemento
        for (const resultadoElement of resultado.data) {

            if(resultadoElement.discount > 0) {
                discount = `${resultadoElement.discount} %OFF`;
            }


            document.querySelector('.products-container').innerHTML += `
             <div class="col-12 col-sm-6 col-lg-4">
                     <section class="product-box">
                        <a href="/products/detail/${resultadoElement.id}">
                           <figure class="product-box_image">
                              <img src="/images/products/${resultadoElement.image}" alt="${resultadoElement.name}">
                           </figure>
                           <article class="product-box_data">
                              <h2>$${resultadoElement.price}</h2>
                              <span>${discount}</span>
                              <p>${resultadoElement.name}</p>
                              <i class="fas fa-truck"></i>
                           </article>
                        </a>
                     </section>
                  </div>
                 
        `
        }

        document.querySelector('.no-hay').innerHTML = "";

    } 


})
.catch((error) => {
    console.log(error);
} )


//busqueda de las categorías
fetch('/api/products/categories/:?')
    .then((response) => {
        return response.json();
    })
    //obtengo resultado
    .then((resultado) => {
    //si lo que hay en el array es mayor que 0
        if (resultado.data.length > 0) {
            //realizo for para poner en el div la lista
            for (const resultadoElement of resultado.data) {
                document.querySelector('.categories-list').innerHTML += `
                    <div>
                          <a class="enlaces-lista" style="font-size: 20px">${resultadoElement.name}</a>
                     </div>
                 <br>
               `
            }

            // href="/products/categories/${resultadoElement.name}" 

            let enlacesLista = document.querySelectorAll('.enlaces-lista');
           
            //hago un for de todas las listas, y obtengo cada elemento
            for(const elementLista of enlacesLista) {
                //hago click en el elemento seleccionado
                elementLista.addEventListener('click', ()=> {
                    //busqueda fetch para buscar url que viene de la api
                    fetch('/api/products/all')
                    .then((response) => {
                        return response.json()
                    })
                    //resultado que viene de la api
                    .then((resultado)=> {
                    let discount;

                    document.querySelector('.products-container').innerHTML = ""

                    document.querySelector('.title') = "hola" 

                    //ciclo de lo que viene en la api
                       for(resultadoElement of resultado.data) {

                        if(resultadoElement.discount > 0) {
                            discount = `${resultadoElement.discount} %OFF`;
                        }

                   


                        document.querySelector('.products-container').innerHTML += `
                        <div class="col-12 col-sm-6 col-lg-4">
                        <section class="product-box">
                           <a href="/products/detail/${resultadoElement.id}">
                              <figure class="product-box_image">
                                 <img src="/images/products/${resultadoElement.image}" alt="${resultadoElement.name}">
                              </figure>
                              <article class="product-box_data">
                                 <h2>$${resultadoElement.price}</h2>
                                 <span>${discount}</span>
                                 <p>${resultadoElement.name}</p>
                                 <i class="fas fa-truck"></i>
                              </article>
                           </a>
                        </section>
                     </div>
                        `
                       }
                    })
                    .catch((error)=> {
                        console.log(error)
                    })
                  
                })
            }


        }
    })
    .catch((error) => {
        console.log(error);
    })