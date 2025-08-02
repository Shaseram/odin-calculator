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
        case "x":
            valor = multiplicacion(numero1, numero2)

            break;
        case "/":
            valor = division(numero1, numero2)

            break;
    }

    return valor;
}
let n1 = ""
let n2 = ""
let op = ""

const display = document.getElementById("result");

let numeros_array = [...document.querySelectorAll(".numero")]
numeros_array.forEach((boton) => {
    
    boton.addEventListener("click", (e) => {
        // Caso pa borrar el 0 inicial al darle click a un numero:v

        let numero = boton.textContent
        if(display.textContent === "0") { display.textContent = ""}

        if(n2 == "" && op == "") {
            display.textContent += numero
            n1 = display.textContent
            console.log(n1)

        } else if(n1 !== "" && op !== "") {
            // Display dejar en blanco en el event listener de los operaadores
            if(n2 === "") {
                display.textContent = ""
            }
            display.textContent += numero
            n2 = display.textContent
            console.log(n2)
        }
        
    })
})

let operadores_array = [...document.querySelectorAll(".operador")]

operadores_array.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        let operador = boton.textContent
        // Caso donde se aprete un operador sin apretar el igual (=)
        if(n1 !== "" && n2 !== "") {
            display.textContent = operator(op, Number(n1), Number(n2))
            n1 = display.textContent
            n2 = ""
            op = operador
            console.log("Entraste en el caso" + op)
        } else {
            op = operador
            console.log(op)
        }
    })
})

const equal = document.getElementById("igual");

equal.addEventListener("click", () => {
    display.textContent = operator(op,Number(n1), Number(n2))
    

})
