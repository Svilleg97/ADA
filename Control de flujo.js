// IF Y ELSE: CONTROL DE FLUJO.

// Código condicional: es un código que sigue ciertas condiciones para avanzar de un lado u otro
// IF: EJEMPLO USANDO STRINGS
function viajar (destino){
    if (destino === 'Brasil'){ // Si destino que es el parametro es igual a Brasil, la consola 
        // imprimirá 'Gire a la derecha'
        console.log('Gire a la derecha');
    } else if (destino === 'Argentina'){ // Si destino que es el parametro es igual a Argentina, la consola 
        // imprimirá 'Gire a la izquierda'
        console.log('Gire a la izquierda');
    } else { console.log('Nos perdimos') // Si ingreso una palabra diferente a BRASIL o ARGENTINA
    // la consola debe imprimir nos perdimos.
    }
} 
var travel = viajar ('Brasil') // ESTA ES LA VARIABLE QUE EJECUTA LA FUNCION Y RECIBE EL PARAMETRO.

// IF: EJEMPLO USANDO BOOLEANOS Y OPERADORES DE COMPARACION

// la función a continuación recibe por parametro edad y tiene que arrojar un resultado TRUE
// si edad es mayor o igual a 18 y FALSE si es menor a 18. 

function age (edad){ // La función recibe un parametro llamado edad, que es el dato que le estamos
    // tirando a la función para que ella se ejecute.
    if (edad >= 18) { // Si el parametro edad, que es el dato que le vamos a tirar a la función
    // es mayor o igual a 18, entonces debe retornar un TRUE
        return true;
    } else {
        return false; // En otro caso, debe retornar FALSE
    }
}
var matias = age (18) // Vamos a comprobar si matias, cumple con los parametros
console.log(matias) // Cumple, porque le arrojamos 18 como parametro y devuelve true

