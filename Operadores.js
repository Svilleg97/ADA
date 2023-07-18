// OPERADORES EN JAVASCRIPT  
// SUMA, RESTA, MULTIPLICACION, DIVISION + - * /

// SUMA 
console.log(3 + 5);
// RESTA
console.log(33 - 15);
// MULTIPLICACION 
console.log(9 * 3);
// DIVISION 
console.log(16 / 8);
// MODULO O RESTO DE UNA DIVISION: Se representa con %, es lo que sobra de la división entera
console.log (9% 4); 

// PRECEDENCIA EN JAVASCRIPT 
console.log(3 + 5 * 2 - 8); // La multiplicación es más importante que la suma para Javascript
// Si queremos que haga primero la operación de 3+5, podemos jugar con las reglas de precedecia
// usando los parentesis, que tienen un orden de precedencia de 19, es decir, el mayor. 
// EJEMPLO: Aquí la suma se hace antes que la resta y la multiplicación. 
console.log((3 + 5) * 2 - 8);

// ADICION Y STRINGS: 
// Los operadores no solo se pueden aplicar a números sino también a otros tipos de datos.
// el operador de adicion + nos va a permitir CONCATENAR STRINGS, ES DECIR, UNIR.

// EJEMPLO: 

let apellido = 'Villegas'; 
let nombre = 'Sara' + ' ' + apellido;
console.log(nombre)
 // CONCATENAR DOS O MAS STRINGS CON EL OPERADOR SUMA, NOS DARA SIEMPRE COMO RESULTADO UN NUEVO STRING






