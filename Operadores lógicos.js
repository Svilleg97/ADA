//OPERADORES LOGICOS EN JAVASCRIPT:

// OPERADOR AND: SE REPRESENTA CON &&, Y NOS VA A PERMITIR CONJUGAR DOS O MAS CONDICIONES AL TIEMPO.
// EJERCICIO: Crear una funcion que verifique si el numero recibido es mayor a diez y menor que 5.
function mayorYmenor (num){
    if (num > 5 && num < 10 && num % 2 === 0) { // Ademas de evaluar si el número es mayor a 10
        // y menor que 5, también vamos a evaluar que el número recibido como parametro sea par
        // para esto se agrega al final de la condición otro AND que busca que el resto % de
        // dividir el número entre 2 sea 0, así es como se determina si es par
        return true;
    } else { 
        return false;
    } 
    }
var numero = mayorYmenor (8) // 8 aplica porque es mayor a 5 y menor que 10, ademas es un numero par
// y se cumplen todas las condiciones, si no cumple alguna de las 3, el resultado sería FALSE. 
console.log(numero)

// OPERADOR OR: SE REPRESENTA CON ||, nos permite conjugar dos o mas condiciones pero con otro comportamiento
// 
 function operadorOr (str){
    if (str === 'Hola' || str.length < 2) {
        return true;
    } else {
        return false;
    }
 }
 var prueba = operadorOr ('Hola') // Si se cumple una u otra condición, entonces va a devolver TRUE
 console.log(prueba)

 // OPERADOR NOT: Nos va a permitir vertificar condiciones opuestas a las normales
 function negacion (permiso){
    if (permiso === true){ // Si ponemos ! en el condicional, vamos a preguntar por el valor opuesto del parametro
        return 'Tiene permiso';}
        else { 
            return 'No tiene permiso'
        }
 }
 var preguntarSiPermisoEsTrue = negacion (false)
console.log(preguntarSiPermisoEsTrue) // Se usa para valores booleanos
