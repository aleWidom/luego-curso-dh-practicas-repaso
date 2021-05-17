window.addEventListener('load', () => {
    
//le realizo al cliente si quiere realizar el proceso
let aceptt = confirm('Quiere realizar el proceso')

//si acepta continuar con el proceso
if(aceptt) {
    //consulto cuantos integrantes tiene la familia
    let nroFamily = prompt('¿Cuantos integrantes tiene la familia?') 

    console.log(nroFamily)

    
   /*  if (nroFamily <= 3) {
         alert('El valor ingresado debe ser un número y debe ser mayor o igual a 3')
            nroFamily = prompt('¿Cuantos integrantes tiene la familia?')  
            console.log(ok)
          } else {
              console.log("Bienvenido")
              ok = true 
        } 
    } */

} //si no acepta continuar con el proceso
 else {
     //genero un alerta con el mensaje gracias por haber venido
    alert("Gracias por haber venido")
    //me envia a la web de netflix
    window.location.replace("https://www.netflix.com/ar");
}
})

