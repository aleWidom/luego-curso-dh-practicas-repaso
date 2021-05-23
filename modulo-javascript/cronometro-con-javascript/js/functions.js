//capturo etiqueta con id start
let start = document.querySelector('#start')

//capturo etiqueta con id pause
let pause = document.querySelector('#pause')

//capturo etiqueta con id reset
let reset = document.querySelector('#reset')


//declaro e inicializo variable seconds
let seconds = 0

//declaro e inicializo variable minutes
let minutes = 0

//declaro e inicializo cada cuanto va a ejecutarse la función setInterval
let interval = 1000

//capturo etiqueta con id seconds
let segundero = document.querySelector('#seconds')

//capturo etiqueta con id minutes
let minutero = document.querySelector('#minutes')

//declaro la variable intervalo
let intervalo;


//si hago clicl sobre la variable start
start.addEventListener('click', function () {
    //se genera un set interval que es guardado en la variable intervalo
    intervalo = setInterval(() => {
        //sumo de a uno cada segundo en cada iteración  
        seconds++;

        //si los segundos son menores a 10
        if (seconds < 10) {
            //reemplazo inerHTMl por: 
            segundero.innerHTML = `0${seconds}`
        } //si los segundos son mayores o igual a 10 y menoro igual a 59
        else if (seconds >= 10 && seconds <= 59) {
            //reemplazo inerHTMl por: 
            segundero.innerHTML = `${seconds}`
        } //si el resto de dividir los segundos entre 60 da cero
        else if (seconds % 60 == 0) {
            //sumo 1 a minutos  
            minutes++

            //reinicio la variable seconds a 0
            seconds = 0

            //hago condicionales de acuerdo si es menor o mayor a 10 y menor a 59
            if (seconds < 10) {
                segundero.innerHTML = `0${seconds}`
                minutero.innerHTML = minutes
            } else if (seconds >= 10 && seconds <= 59) {
                segundero.innerHTML = `${seconds}`
                minutero.innerHTML = minutes
            }


        }
       //cada cuanto se va a ejecutar la función
    }, interval);
})



    //si hago click en variable pause
    pause.addEventListener('click', function () {
        //paro el intervalo
        clearInterval(intervalo)
    })

    //si hago click en variable reset
    reset.addEventListener('click', function () {
          //paro el intervalo
        clearInterval(intervalo)
       
        //modifico el innerHTML de segundero
        segundero.innerHTML = `00`
         //modifico el innerHTML de minutero
        minutero.innerHTML = `00`
        seconds = 0
    })




