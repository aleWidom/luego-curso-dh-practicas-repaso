//utilizo evento load sobre window
window.addEventListener('load', () => {
    //capturo etiqueta con id abracadabra
    let abracadabra = document.querySelector('#abracadabra')

    //BOTON ABRACADABRA
    //realizo un evento click sobre lo que hay en la variable abracadabra
    abracadabra.addEventListener('click', () => {
        //consulto el nombre y lo guardo
        let nombre = prompt('Ingrese su nombre')

        //capturo etiqueta con id titular
        let titular = document.querySelector('#titular')

        //reemplazo el contenido html. Utilizo el nombre que viene del prompt 
        titular.innerHTML = `Hi. I'm <strong>${nombre}</strong>.`

    })


    //capturo etiqueta con id touch
    let touch = document.querySelector('#touch')

    //   //BOTON GET IN
    // //realizo un evento dobleClick sobre lo que hay en la variable touch
    // touch.addEventListener('dblclick', () => {

    //     //capturo etiqueta con clase parrafo-color
    //     let parrafoColor = document.querySelector('.parrafo-color')

    //     //cambio el estilo de la etiqueta parrafoColor a color rojo
    //     parrafoColor.style.color = 'red'

    // })


    let colorAlAzar = (colores) => {

        //retorno del array de colores la posicion redondeando al entero más cercano lo que me da Math.random ((entre 0 y 1) y en este caso por 4)
        return colores[Math.round(Math.random() * 4)]

    }

    touch.addEventListener('dblclick', () => {

        //capturo etiqueta con clase parrafo-color
        let parrafoColor = document.querySelector('.parrafo-color')

        //cambio el estilo de la etiqueta parrafoColor con la función colorAlAzar
        parrafoColor.style.color = colorAlAzar(['red', 'blue', 'orange', 'green', 'yellow'])

    })


    //capturo todas las etiquetas que tienen como clase .style1
    let style1 = document.querySelectorAll('.style1')


    //declaro e inciaclizo una variable que me va a servir luego como iterador
    let indiceClase = 0

     

    for (const iterator of style1) {
        //sobre cada etiqueta con clase style1 agrego un evento click
        iterator.addEventListener('click', ()=> {
            //tomo el h3 del contenido de cada etiqueta con clase style1
            let h3 = iterator.querySelector('h3');
            //tomo el contenido que esta en dicha etiqueta
            let contenidoH3 = h3.innerHTML
            //genero un alerta de donde clickeo 
            alert(`Clickeaste sobre ${contenidoH3}`)
        })
        
       
        
        
        
        
        // //por cada iteracion a cada etiqueta con clase style1 le agrego la clase estilo nroi
        // iterator.classList.add(`estilo${indiceClase++}`)
    }



    



})














































/* //1
window.onload = () => {
    //2
    // alert('hola');
    console.log(portfolio)
    // let abracadara = document.getElementById('abracadabra');
    abracadabra.onclick = () => {
        let nombre = prompt('Me decis tu nombre');
        titular.innerHTML = `Hi. I'm <strong>${nombre}</strong>`;
    }
    //poner id en html del a
    touch.ondblclick = () => {
        //5
        // document.querySelector('.parrafo-color').style.color = 'red';
        //6
        document.querySelector('.parrafo-color').style.color = colorAlAzar();
    }
    //5
    function colorAlAzar(){
        let colors = ['red','yellow','pink','orange','cyan'];
        return colors[Math.floor(Math.random() * 5)]; // 0-4 
    }
    console.log(colorAlAzar());
    //7
    let cards = document.querySelectorAll('.box.style1');
    // console.log(cards);
    for (let card of cards){
        card.onclick = () => alert('Clickeaste sobre: ' + card.querySelector('h3').innerText)
    }

    // PARTE DOS
    //1.a
    let textoPorfolio = document.querySelector('.footer-portfolio p');
    let btnPortfolio = document.querySelector('.footer-portfolio a');

    btnPortfolio.onmouseover = (e) => textoPorfolio.style.color = colorAlAzar();
    //1.b
    btnPortfolio.onmouseout = () => textoPorfolio.style.color = '#888';

    //2
    lechuza.onclick = () => {
        //2.a
        alert('Preparate para el futuro');
        //2.b
        setTimeout(() => alert('El futuro ya llegó!') , 5000);
    }
    //3
    let estadoSecreto = 0;
    window.onkeypress = (e) => {
        // console.log(`presionaste la tecla ${e.key}`);
        //4
        // if (e.key == " ")  console.log('Presionaste la barra')
        switch (estadoSecreto) {
            case 0:
                (e.key == "s") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 1:
                (e.key == "e") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 2:
                (e.key == "c") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 3:
                (e.key == "r") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 4:
                (e.key == "e") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 5:
                (e.key == "t") ? estadoSecreto++ : estadoSecreto = 0
                    break;
            case 6:
                if (e.key == "o") {
                     alert('SECRETO MAGICO');
                }
                estadoSecreto=0;
            break;
        }
        console.log(estadoSecreto)
    };
    //5
    email.onkeydown = (e) => {
        if (e.key == " ") alert('No se puede escribir espacios aca!');
    } 

    //+++++++++++++
    // EXTRA EXTRA
    //+++++++++++++

    let sorteo = Math.floor(Math.random() * 6);
    let gamecards = document.querySelectorAll('.box.style2');
    gamecards.forEach((gamecard, index) => {
        gamecard.onclick = () => (sorteo == index) ? alert('Ganaste!') : alert('Ese no es!')
    })
    
}
 */