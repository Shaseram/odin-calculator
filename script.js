/*
Calculadora en pantalla con HTML, JS y CSS

* Funciones a implementar
- Suma 
- Resta
- Multiplicacion
- Division

*/

let n1 = ""
let n2 = ""
let op = ""
let operado = false


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

const limpiar = () => {
    n1 = ""
    n2 = ""
    op = ""
    display.textContent = "0"
}

const display = document.getElementById("result");

let numeros_array = [...document.querySelectorAll(".numero")]
numeros_array.forEach((boton) => {
    
    boton.addEventListener("click", (e) => {
        // Caso pa borrar el 0 inicial al darle click a un numero:v

        let numero = boton.textContent
        if(display.textContent === "0") { display.textContent = ""}

        if(operado && op === "") {
            limpiar()
            display.textContent = ""
            operado = false
        }

        if(n2 == "" && op == "") {
            display.textContent += numero
            n1 = display.textContent


        } else if(n1 !== "" && op !== "") {
            // Display dejar en blanco en el event listener de los operaadores
            if(n2 === "") {
                display.textContent = ""
            }
            display.textContent += numero
            n2 = display.textContent
            
        }
        
        
    })
})

let operadores_array = [...document.querySelectorAll(".operador")]

operadores_array.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        let operador = boton.textContent


        if (operado) {
            operado = false
            n2 = ""
        }

        // Caso donde se aprete un operador sin apretar el igual (=)
        if(n1 !== "" && n2 !== "") {
            display.textContent = operator(op, Number(n1), Number(n2))
            n1 = display.textContent
            n2 = ""
            op = operador

        } else {
            op = operador

        }
    })
})

const equal = document.getElementById("igual");

equal.addEventListener("click", () => {
    const resultado = operator(op, Number(n1), Number(n2))
    display.textContent = resultado
    operado = true

    n1 = String(resultado)              
    op = ""
})

const clear = document.querySelector("#clear")


clear.addEventListener("click", (e) => {
    limpiar()

})

const borrar = document.querySelector("#delete")


borrar.addEventListener("click", (e) => {
    if (display.textContent !== "0") {
        display.textContent = display.textContent.slice(0, -1)
        
        if(display.textContent == "") {display.textContent = "0"}
    }
})

const dot = document.querySelector("#punto")

dot.addEventListener("click", (e) => {
    if(!display.textContent.includes(".")) {
        display.textContent += "."
    }
})