/*
Calculadora en pantalla con HTML, JS y CSS

* Funciones a implementar
- Suma 
- Resta
- Multiplicacion
- Division

*/

const suma = (numero1, numero2) => {
    return numero1 + numero2;
}

const resta = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicacion = (numero1, numero2) => {
    return numero1 * numero2;
}

const division = (numero1, numero2) => {
    return numero1 / numero2;
}

const operator = (operador, numero1, numero2) => {
    let valor = 0
    switch(operador) {
        case "+":
            valor = suma(numero1, numero2)

            break;
        case "-":
            valor = resta(numero1, numero2)

            break;
        case "X":
            valor = multiplicacion(numero1, numero2)

            break;
        case "/":
            valor = division(numero1, numero2)

            break;
    }

    return valor;
}

const display = document.getElementById("result");





