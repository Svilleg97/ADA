// OPERADORES DE COMPARACION:
// Los operadores de comparación son:
// == igual que, 
// < menor que, 
// > mayor que , 
// <= menor igual que 
// >= mayor igual que
// != distinto de 
// === operador de estricta igualdad 
// LOS OPERADORES DE COMPARACION DEVUELVEN UN VALOR BOOLEANO (True or False)
console.log (4 < 7);
console.log (4 > 7);
console.log (4 <= 7);
console.log (4 >= 7);
console.log (4 != 7);
console.log (4 === 7);
// NO SE DEBE CONFUNDIR EL OPERADOR DE ASIGANCION = CON LOS OPERADORES DE IGUALDAD == Y ===

// Podriamos preguntarnos si dos numero son iguales o diferentes
console.log(3 == 3);
console.log(3 ===3);
console.log(3 == '3'); // 3 entre comillas es un tipo de dato STRING, en este caso la igualdad
// solo verifica si el valor es el mismo aunque el tipo de dato sea diferente, por eso arroja
// TRUE. 
console.log(3 === '3');// 3 entre comillas en un STRING, la igualdad estricta
// verifica no solo el tipo de dato (STRING EN ESTE CASO), sino también su valor, y ambas
// deben coincidir para que arroje un resultado TRUE. En este caso coincide el VALOR (3)
// pero no el tipo de dato porque es un STRING. 
// ESTE PROCEDIMIENTO DE COMPARACION SE LLAMA ABSTRACT EQUALITY COMPARASION
// ES UNA BUENA PRACTICA USAR SIEMPRE LA IGUALDAD ESTRICTA

// ASOCIATIVIDAD: Nos va a permitir saber que operación se ejecuta primero en el código
// JAVASCRIPT EJECUTA LOS CODIGOS DE DERECHA A IZQUIERDA
// EJEMPLO:
var a = 1;
var b = 2;
var c = (a = b); // Los parentesis tienen una precedencia de 19, por eso se ejecuta primero
// lo que esta en parentesis, es decir, el valor de a(1) pasa a ser el de b(2), y posteriormente
// se resuelve lo que esta afuera del parentesis, así que c es igual a a, y a es 2 porque toma
// el valor de b. 
a
b
c
// la división tiene una asociatividad a la izquierda, es decir, que se resuelve al reves
console.log(16 / 2 / 4) // Primero se resuelve 16 / 2 y luego 2 / 4
