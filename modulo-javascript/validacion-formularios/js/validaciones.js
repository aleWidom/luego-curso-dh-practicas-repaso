//capturo la etiqueta con clase contact-form que es la del form
let form = document.querySelector('.contact-form')

//declaro e inicializo variables inputsCorrectos
let inputsCorrectos = 0;

//capturo etiqueta con id fullName
let inputName = document.querySelector('#fullName')
//capturo etiqueta con id email
let inputEmail = document.querySelector('#email')
//capturo etiqueta con id telefono
let inputTelefono = document.querySelector('#phone')
//capturo etiqueta con id password
let inputPassword = document.querySelector('#password')
//capturo etiqueta con id repassword
let inputRePassword = document.querySelector('#rePassword')
//capturo etiqueta con clase country
let inputCountry = document.querySelector('.seleccion')

//captruo etiquetas con la clase .invalid-feedback
let spanErrores = document.querySelectorAll('.invalid-feedback ')

//declaro e inicializo en 0 la variable i 
let i = 0


//declaro variables como undefined para luego darles un valor si el input esta correcto. Esto lo hago para que al comienzo cuando hago el submit sea undefined
let inputNameOk;
let inputEmailOk;
let inputTelefonoOk;
let inputContraseniaOk;
let inputReContraseniaOk;
let inputCountryOk;

//declaro la variable contrasenia
let contrasenia;

//expresion regular
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


//ciclo  
for (const iterator of spanErrores) {
    //agrego una clase por cada iteracion con el nombre spanErrores + i
    iterator.classList.add(`spanErrores${i++}`)
}

//genero un evento blur a etiqueta que contega el inputName
inputName.addEventListener('blur', function () {
    //si inputName el value es igual a vacio 
    if (inputName.value == "") {
        //agrego clase
        inputName.classList.add('is-invalid')
        //capturo la etiqueta y le agrego el siguiente error
        document.querySelector('.spanErrores0').innerHTML = "Debe completar su nombre"
    } //si esta completo correcto el input
    else {
        //elimino clase
        inputName.classList.remove('is-invalid')
        //sumo uno 
        inputsCorrectos++
        //le asigno el valor true
        inputNameOk = true
    }

})


//genero un evento blur a etiqueta que contega el inputEmail
inputEmail.addEventListener('blur', function () {
    //si esta bien
    if (regexEmail.test(inputEmail.value)) {
        //elimino la clase
        inputEmail.classList.remove('is-invalid')
        //sumo uno 
        inputsCorrectos++
        //le asigno el valor true
        inputEmailOk = true
    } //si esta mal
    else {
        //agrego clase
        inputEmail.classList.add('is-invalid')
        //capturo la etiqueta y le agrego el siguiente error
        document.querySelector('.spanErrores1').innerHTML = "Debe completar un email correcto"
    }
})




//genero un evento blur a etiqueta que contega el inputTelefono
inputTelefono.addEventListener('blur', function () {
    ////si inputTelefono el value es mayor a cero y la longitud del value es mayor a 8 esta bien es correcto
    if (inputTelefono.value > 0 && inputTelefono.value.length >= 8) {
        //elimino clase
        inputTelefono.classList.remove('is-invalid')
        //sumo uno
        inputsCorrectos++
        //le asigno el valor true
        inputTelefonoOk = true

    } //si estan mal el campo 
    else {
        //agrego clase
        inputTelefono.classList.add('is-invalid')
        //capturo la etiqueta y le agrego el siguiente error
        document.querySelector('.spanErrores2').innerHTML = "Debe completar su teléfono con números"
    }

})


//genero un evento blur a etiqueta que contega el inputPassword
inputPassword.addEventListener('blur', function () {
    ////si inputPassword el value es distinto a vacio 
    if (inputPassword.value.length < 4 ) {
        //agrego clase
        inputPassword.classList.add('is-invalid')
        //capturo la etiqueta y le agrego el siguiente error
        document.querySelector('.spanErrores3').innerHTML = "La contraseña no puede ser menor a 4 carácteres"
    } //si esta completo correcto el input 
    else {

        //si esta correcto el input asigno el valor del value a la variable contrasenia
        contrasenia = inputPassword.value

        //elimino clase
        inputPassword.classList.remove('is-invalid')
        //sumo uno 
        inputsCorrectos++
        //le asigno el valor true
        inputContraseniaOk = true
    }
})


//genero un evento blur a etiqueta que contega el inputRePassword
inputRePassword.addEventListener('blur', function () {
    ////si inputRePassword el value es a lo que hay en la variable contrasenia 
    if (inputRePassword.value != contrasenia) {
        //agrego clase
        inputRePassword.classList.add('is-invalid')
        //capturo la etiqueta y le agrego el siguiente error
        document.querySelector('.spanErrores4').innerHTML = "Debe repetir su contraseña"
    } //si esta completo correcto el input
    else {
        //elimino clase
        inputRePassword.classList.remove('is-invalid')
        //sumo uno
        inputsCorrectos++
        //le asigno el valor true
        inputReContraseniaOk = true
    }
})


//genero un evento blur a etiqueta que contega el inputCountry
inputCountry.addEventListener('blur', function () {
    ////si inputCountry el value es distinto a vacio 
    if (inputCountry.value == "") {
        //agrego clase
        inputCountry.classList.add('is-invalid')
        //capturo la etiqueta y le agrego el siguiente error
        document.querySelector('.spanErrores5').innerHTML = "Debe elegir un país"
    } //si esta completo correcto el input 
    else {
        //elimino clase
        inputCountry.classList.remove('is-invalid')
        //sumo uno 
        inputsCorrectos++
        //le asigno el valor true
        inputCountryOk = true
    }
})



//genero un evento submit en el formulario
form.addEventListener('submit', function (e) {
    //si no estan todos los inputs requeridos
    if (inputsCorrectos < 6) {
        e.preventDefault()

        console.log(inputNameOk)

        //si inputNameOk es igual a undefined
        if (inputNameOk == undefined) {
            //agrego clase
            inputName.classList.add('is-invalid')
            //capturo la etiqueta y le agrego el siguiente error
            document.querySelector('.spanErrores0').innerHTML = "Debe completar su nombre"
        }

        //si inputEmailOk es igual a undefined
        if (inputEmailOk == undefined) {
            //agrego clase
            inputEmail.classList.add('is-invalid')
            //capturo la etiqueta y le agrego el siguiente error
            document.querySelector('.spanErrores1').innerHTML = "Debe completar su email"
        }


        //si inputTelefonolOk es igual a undefined
        if (inputTelefonoOk == undefined) {
            //agrego clase
            inputTelefono.classList.add('is-invalid')
            //capturo la etiqueta y le agrego el siguiente error
            document.querySelector('.spanErrores2').innerHTML = "Debe completar su teléfono"
        }


        //si inputPasswordlOk es igual a undefined
        if (inputContraseniaOk == undefined) {
            //agrego clase
            inputPassword.classList.add('is-invalid')
            //capturo la etiqueta y le agrego el siguiente error
            document.querySelector('.spanErrores3').innerHTML = "Debe completar su contraseña"
        }

        //si inputContrasenialOk es igual a undefined
        if (inputReContraseniaOk == undefined) {
            //agrego clase
            inputRePassword.classList.add('is-invalid')
            //capturo la etiqueta y le agrego el siguiente error
            document.querySelector('.spanErrores4').innerHTML = "Debe repetir su contraseña"
        }

        //si input countryOk es igual a undefined
        if (inputCountryOk == undefined) {
            //agrego clase
            inputCountry.classList.add('is-invalid')
            //capturo la etiqueta y le agrego el siguiente error
            document.querySelector('.spanErrores5').innerHTML = "Debe elegir un país"
        }


    } //si están todos los inputs ok 
    else {
        e.preventDefault()
        //capturo todo el div que me interesa y no le pongo nada como innerHTML
        document.querySelector('.col-md-8').innerHTML= ""

        document.querySelector('.col-md-8').innerHTML= `<ul><li>${inputName.value}</li><li>${inputEmail.value}</li><li>${inputTelefono.value}</li><li>${inputCountry.value}</li></ul><h2>Gracias por Registrarse.</h2>`


    }
})

















































/* let formulario = document.querySelector('.contact-form')




 let nombre = document.querySelector('#fullName')
 

 formulario.addEventListener('submit', function(e) {
    
    e.preventDefault()
    
    nombre.addEventListener('blur', function() {
        if(nombre.value == "") {
            nombre.classList.add('is-invalid')
        }
     })
 })
 */