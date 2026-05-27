console.log("Conexión exitosa con JS...");

/* 
==============================
1. ¿Qué es una condición en JS?
==============================
Una condición nos permite tomar decisiones en el 
código. Separando dos caminos el si(if)y el no(else).

Estructura básica:( Sintáxis  --> Reglas del Lenguaje de programación).

if (condicion) {
    //código que se ejecuta si la condición es verdadera.
} else {
    //código que se ejecuta si la condición es falsa.
}
*/

//Ejemplo 1: (numérico) -- IF
let edad = 18;

if (edad == 20) {  //Condición Si
    console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 21;

if (temperatura > 20){ //Condición SI
    console.log("Hace calor");
} else { //Condición No
    console.log("Hace frío")
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 3.5;

if (nota >= 6.0){ //Primera condición
    console.log("Excelente! sigue así!");
} else if (nota >= 4.0){ //Segunda condición
    console.log("Aprobado, puedes mejorar!");
} else { //Valor si no cumple anteriores
    console.log("Reprobado, estudia más!")
}

// Ejemplo 4: Condiciones con STRING
let nombre = "Dany";

//Comparación exacta (===)
if (nombre === "Dany"){
    console.log("Hola, " + nombre)
} else {
    console.log("Tu no eres Dany")
}

/*
OPERADORES DE COMPARACIÓN
> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
// Ejemplo de distinto
let num = 5;
let num2 = 10
if (num !== num2) { //Comparación con distinto
    console.log(`El número ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales!")
}