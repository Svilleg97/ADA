//CALLBACKS: Son un tipo de función que recibe como parametro otra función. 
function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 } // TODAS LAS FUNCIONES DEBEN IR SEPARADAS POR LLAVES Y TENER CUERPO INDIVIDUAL
 function saludar(cb1, cb2) { // Esta es la función de Callback
    // Que retorna los parametros que recibe concatenados
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario); // acá se invoca a la función saluda
 // y se le pasa por parametro la función devuelvoSaludo y DevuelcoUsuario
 console.log(resultado); // El resultado es hola camilo

 // Los callbacks son muy útiles en el mundo de la programación, 
 // nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, 
 // sino que se ejecutará justo después de que la tarea se haya completado.