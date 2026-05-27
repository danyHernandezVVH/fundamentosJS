console.log("Conexión exitosa con JS...");

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.
function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenía: ${edad - 10}`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento(){
let precio = 25000;
alert(`El precio es de: $${precio}
    \nEl descuento del 20% es: $${precio * 0.2}
    \nPero con descuento: $${precio - (precio * 0.2)}`);
};
//

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
    let nota1 = 4.5;
    let nota2 = 6.7;
    let nota3 = 5.8;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`Se tiene 3 notas ${nota1} , ${nota2} y ${nota3}
        \nEl promedio de estas es: ${promedio}
        \nY redondeado seria ${Math.round(promedio)}`)
};// 

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
let temperatura = 15;
let aumentada = temperatura + 3;
let disminuida = temperatura - 5;
let resultado = temperatura + 3 - 5;
alert(`La temperatura actual es: ${temperatura}
    \nLa temperatura aumentada es: ${aumentada}
    \nLa temperatura disminuida es: ${disminuida}
    \nEl resultado de la temperatura es: ${resultado}`)
}

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo(){
    let valorHora = 8000;
    let cantidadHora = 45;
    let sueldo = valorHora * cantidadHora
    cantidadHora += 5; // += para incrementar o acumular
    let sueldoNuevo = valorHora * cantidadHora;
    alert(`sueldo actual: $${sueldo} 
        \nSueldo nuevo con incremento: $${sueldoNuevo} `)
} //

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function operaciones(){
let numero1 = 6;
let numero2 = 7;
alert(`La division es: ${numero1 / numero2}
    \nY el resto es: ${numero1 % numero2}`)
    alert("El resto de la división se obtiene con el simbolo %")
} //

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números: 
// Muestra si el primero es mayor que el segundo
// Verifica soperaciones()i uno de ellos es igual a 10

function comparacionNumerica(){
    let num1 = 10
    let  num2 = 7
    alert (`¿num1 es mayor que num2?: ${num1 > num2}
    \n¿El num1 es igual a 10 ${num1 === 10}
    \n¿El num2 es igual a 10 ${num1 === 10}`)
};//

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function calcularPoblacion(){
    let poblacion = 2e6;
    alert(`La población es de ${poblacion}
        \nSe dividiran en grupos de 4
        \nEl resultado es de ${poblacion / 4} en 4 grupos`)
};//

// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function calcularPotencia(){
    let num1 = 3;
    let num2 = 4;
    let potencia = num1 ** num2;
    let multi = potencia * 2;
    alert(`El resultado de 3 elevado a 4 es: ${potencia}
        \nResultado anterior por 2 es: ${potencia * 2}
        \nEl resultado final menos 10 es: ${multi - 10}`)
};//

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function lanzarDados(){
    let dado = Math.floor(Math.random() * 6) + 1;
    alert(`Tirar Dados: ¡${dado}! 
        \n¿Es mayor que 4? : ${dado >= 4}`);
};