
fetch('api/products/latest')
.then((response)=> {
    return response.json();
})
.then((resultado)=> {

    document.querySelector('#latest-products').innerHTML = "";

    if (resultado.data.length > 0) {
        for (const resultadoElement of resultado.data) {
            document.querySelector('#latest-products').innerHTML += `
            <div class="col-12 col-sm-6 col-lg-3">
\t\t\t\t\t\t\t\t<section class="product-box">
\t\t\t\t\t\t\t\t\t<a href="/products/detail/>
\t\t\t\t\t\t\t\t\t\t<figure class="product-box_image">
\t\t\t\t\t\t\t\t\t\t\t<img src="/images/products/${resultadoElement.image}" alt="${resultadoElement.name}">
\t\t\t\t\t\t\t\t\t\t</figure>
\t\t\t\t\t\t\t\t\t\t<article class="product-box_data">
\t\t\t\t\t\t\t\t\t\t\t<h2>${resultadoElement.price}</h2>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t<span>${resultadoElement.discount}% OFF</span>
\t\t\t\t\t\t\t\t\t\t\t<p>${resultadoElement.name}</p>
\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-truck"></i>
\t\t\t\t\t\t\t\t\t\t</article>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</section>
\t\t\t\t\t\t\t</div>
            `;
        }
    }
})


fetch('api/products/offers')
    .then((response)=> {
        return response.json();
    })
    .then((resultado)=> {

        document.querySelector('#offers-products').innerHTML = "";

        if (resultado.data.length > 0) {
            for (const resultadoElement of resultado.data) {
                document.querySelector('#offers-products').innerHTML += `
            <div class="col-12 col-sm-6 col-lg-3">
\t\t\t\t\t\t\t\t<section class="product-box">
\t\t\t\t\t\t\t\t\t<a href="/products/detail/>
\t\t\t\t\t\t\t\t\t\t<figure class="product-box_image">
\t\t\t\t\t\t\t\t\t\t\t<img src="/images/products/${resultadoElement.image}" alt="${resultadoElement.name}">
\t\t\t\t\t\t\t\t\t\t</figure>
\t\t\t\t\t\t\t\t\t\t<article class="product-box_data">
\t\t\t\t\t\t\t\t\t\t\t<h2>${resultadoElement.price}</h2>
\t\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\t\t<span>${resultadoElement.discount}% OFF</span>
\t\t\t\t\t\t\t\t\t\t\t<p>${resultadoElement.name}</p>
\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-truck"></i>
\t\t\t\t\t\t\t\t\t\t</article>
\t\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t\t</section>
\t\t\t\t\t\t\t</div>
            `;
            }
        }
    })
