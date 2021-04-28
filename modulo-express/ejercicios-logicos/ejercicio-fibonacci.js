

let fibonacci = () => {

    //sumatoria numero actual + numero anterior

    let resultadoParcial;

    let serie = [5,8]

    for (let i=0; i<10; i++) {
        resultadoParcial = serie[i] + serie[i+1]
        serie.push(resultadoParcial)
    }

    return serie
}

console.log(fibonacci())

