// BUCLES FOR:
//Los bucles o ciclos de iteración nos van a permitir realizar acciones de manera repetitiva
// ahorrandonos lineas de código

//var suma = 0
//suma = suma + 1;  // 0 + 1 = 1// suma esta igualada a suma + 1, es decir, suma inicialmente es 0, lo que
//suma = suma + 2; // 1 + 2 = 3//significa que 0 se va a ir incrementando dependiendo del resultado de la suma
//suma = suma + 3; // 3 + 3 = 6// inmediatamente anterior
//suma = suma + 4; // 6 + 4 = 10 
//console.log(suma) // por eso aca imprime 10

// BUCLE FOR:
// Nos permite repetir nuestro código varias veces.

// SINTAXIS DEL BUCLE --
// for (var i=1 ; i<10; i++) // La variable i va a ser igual a 0 y se va a ejecutar hasya llegar a 10
 // de ahí va a a ir encrementando en uno 
 var numeroDeUsuarios = 1;
 for (i = 0; i<= 50; i++){
    numeroDeUsuarios = numeroDeUsuarios +5;
    console.log(numeroDeUsuarios)
 } 
 i = i + 1
 // Explicación de la sintaxis del BLUCLE FOR:
 //En este caso sabemos exactamente cuantas veces queremos que se ejecute el código.
 //La variable numeroDeUsuarios se va a iniciar en 0
 //Posteriormente el bucle va a reproducirse desde 1 hasta llegar a 50
 //para hacer que incremente en uno, igualamos dentro de las llaves, la variable numeroDeUsuarios y le decimos que le sume 1
 //en cada iteración, por eso en la consola imprime los numeros del 1 al 50, si solo pusieramos
 //un console,log, imprimiria 0, que es el valor de la variable numeroDeUsuarios 50 veces. 

