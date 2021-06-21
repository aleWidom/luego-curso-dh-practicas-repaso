

//array numeros
let array = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]



let arrayNoPrimos = [];

let arrayMismoNumero = []

let arrayPrimos = []


//hago un ciclo sobre el array de nros
array.forEach((element) => {
  
  console.log(`elemento ciclo principal ${element}`)  

  array.forEach((iterador) => {
    console.log(iterador)
    if(element/iterador == 1) {
        arrayMismoNumero.push(element) 
    } else if(element%iterador == 0) {
        arrayNoPrimos.push(element)    
    }
  })

 

});


//let arrayNoPrimos
/* [4, 6, 6, 8, 8, 9, 10, 10, 12, 12, 12, 12, 14, 14, 15, 15, 16, 16, 16, 18, 18, 18, 18, 20, 20, 20, 20] */


for (let index = 0; index < array.length; index++) {
    if(  arrayNoPrimos.indexOf(array[index]) == -1) {
        arrayPrimos.push(array[index])
    }
}


console.log(arrayPrimos)