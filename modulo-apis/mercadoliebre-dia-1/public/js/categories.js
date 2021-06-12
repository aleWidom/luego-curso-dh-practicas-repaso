fetch('/api/products/latest')
.then((response) => {
    return response.json();
})
.then((resultado) => {

    document.querySelector('.products-container').innerHTML = ""

    let discount;

    if(resultado.data.length > 0) {
        console.log("ingrese")
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
    } else if (resultado.data.length == 0) {

        document.querySelector('.no-hay').innerHTML = "";
    }
})
.catch((error) => {
    console.log(error);
} )


fetch('/api/products/categories/:?')
    .then((response) => {
        return response.json();
    })
    .then((resultado) => {
        if (resultado.data.length > 0) {
            for (const resultadoElement of resultado.data) {
                document.querySelector('.categories-list').innerHTML += `
                    <div>
                          <a href="/products/categories/${resultadoElement.name}" style="font-size: 20px">${resultadoElement.name}</a>
                     </div>
                 <br>
                `}
        }
    })
    .catch((error) => {
        console.log(error);
    })