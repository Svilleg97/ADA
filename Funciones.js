// FUNCIONES
// Nos van a permitir ejecutar una serie de acciones en el orden que necesitemos
// EJEMPLO:
// f(x)= x + 3
// x = 5
// f = 5 + 3 
// f = 8
// FUNCIONES EN JAVASCRIPT
function sumaTres (x){
    console.log (x + 3); // El valor por parametro es x, y si le paso un 4 a la funcion
    // va a sumar 4 + 3 que es igual a 7.
}
sumaTres (2) 
// ANALISIS DE LA FUNCION PARA COMPRENDER LA ESTRUCTURA 

// function, es una palabra reservada que nos indica que lo siguiente es una funcion
// luego se le asigna un nombre a esa funcion que en este caso es sumaTres
// lo que va en parentesis, es el argumento o parametro, que le da información a la función
// podemos escribir los argumentos o parametros que queramos.
// luego van unas llaves {}, y dentro de esas llaves escribimos las instrucciones que ejecutara
// la funcion. En este caso le estamos diciendo que cuando la funcion se ejecute, debe imprimir
// en la consola el valor que le pasemos a x por parametro (4) y sumarle el número 3. 

// FORMAS DE DECLARAR UNA FUNCION
// FORMA 1:

 function funcion1 (y){
    return y + 2;
}
var k = funcion1 (2) 
console.log (k) // Hay que declarar una nueva variable, que reciba la función y el parametro
// que le queremos enviar para que pueda ejecutar el cuerpo de la función, es decir, lo que 
// queremos que haga.
 
 //FORMA 2: FUNCION DE FLECHA 
 var funcionDeFlecha = (b) => {
    return b + 8;
 } 
 var y = funcionDeFlecha (4) // para poder visualizar el resultado del RETURN
 // tengo que crear una nueva variable que albergue ese resultado y desde donde yo pueda llamar
 // a mi variable, es decir, creo una variable y, que va a ser igual a mi funcion (funcionDeFlecha)
 // y le voy a tirar el parametro que quiera, para imprimir el resultado con un console.log
 // como le tire un 4 como parametro a mi funcion, entonces el va a imprimir 4 + 8 = 12 
 console.log(y) 
 // La funcion flecha ayuda a simplificar el código.

 // NO SE DEBE CONFUNDIR RETURN CON CONSOLE.LOG
 // CONSOLE.LOG:
 // Console.log es una ayuda visual para saber el valor de una variable o el valor
 // que devuelve una linea de código, ninguna aplicación o programa real debería tener un
 // console.log en su código, HAY QUE ELIMINARLO DESPUES

 // RETURN:
 // Es fundamental en todas las funciones porque es la instruccion que le damos a la funcion
 // para que nos devuelva el resultado de lo que queremos que ejecute nuestra función

 





 


