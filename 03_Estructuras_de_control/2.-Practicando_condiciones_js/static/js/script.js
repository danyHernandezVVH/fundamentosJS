console.log("conexión exitosa con js...");

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Dany";
    alert(`Bienvenido ${nombre}`);
}

// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let num1 = 5;
    let num2 = 10;
    let suma = num1 + num2;
    alert(`La suma es: ${suma}`);
}

// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 20;
    let num2 = 8;
    let resta = num1 - num2;
    alert(`La resta es: ${resta}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let num1 = 2;
    let num2 = 12;
    let multiplicación = num1 * num2;
    alert(`La multiplicación es: ${multiplicación}`);
}

// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 6.0;
    let nota2 = 5.5;
    let nota3 = 5.6;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`El promedio es: ${promedio}`)
}

// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 17;
    if (edad < 18) {
        alert(`Es menor de edad`);
    } else {
        alert(`Es mayor de edad`);
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"
function ejercicio7() {
    let numero = 21;
    if (numero % 2 == 0) {
        alert(`El número es par`)
    } else {
        alert(`El número es impar`)
    }
}

// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
let nota = 4.5;

if (nota >= 4.0){
        alert(`Estudiante aprobado`)
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precioProducto = 20000;
    let descuento = 0.1;
    alert(`Precio final con descuento $${precioProducto - (precioProducto * descuento)}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 10;
    let num2 = 5;
    if(num1 > num2){
        alert(`El número mayor es: ${num1}`)
    } else {
        alert(`El número mayor es: ${num2}`)
    }
}
