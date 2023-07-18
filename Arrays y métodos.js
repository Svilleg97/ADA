//Los arreglos son listas de datos que nos permiten almacenar información, son otro tipo de dato
// en el mundo de javascript. En los arreglos, se conocen como elementos, todos aquellos datos
// que se han guardado en un array, por otro lado estan los índices, que no representan el dato en si
// sino la posición en la que se ha guardado el dato dentro del array. En los arreglos siempre se
// empieza a contabilizar la posición de un elemento desde el número 0, esta sería la primera
// posición dentro del array. LA CANTIDAD DE ELEMENTOS SIEMPRE SERA MAYOR A LA CANTIDAD DE INDICES
// PORQUE LOS ELEMENTOS SE EMPIEZAN A CONTAR DESDE 1, Y SON LA CANTIDAD DE DATOS GUARDADOS EN EL ARRAY. 
var ListaDeCompras = []
ListaDeCompras [3]= 'Doritos de limón'; 
ListaDeCompras [2]= 'Papitas picantes'; 
ListaDeCompras [1]= 'Doritos picantes'; 
ListaDeCompras [0]= 'Takis fuego'; 

let elemento = [2];ListaDeCompras  // De esta forma se accede a un elemento dentro del array. 
console.log(elemento);
console.log(ListaDeCompras.length) // Con el metodo Length, la terminal nos muestra la cantidad de elementos
//que hay dentro de un array. 


// METODOS EN LOS ARREGLOS 
var mismascotas = ['Zeus', 'Tori', 'Chubby', 'Gus', 'Buddy'];
mismascotas.push('Lolito');// PUSH ES PARA AGREGAR UN NUEVO ELEMENTO AL FINAL DEL ARRAY
mismascotas.push('Guppy');
mismascotas.push('Sammy');
console.log(mismascotas)
mismascotas.unshift('Lucas'); // UNSHIFT AGREGA UN NUEVO ELEMENTO AL PRINCIPIO DEL ARRAY
console.log(mismascotas)
mismascotas.pop(); // POP ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY
console.log(mismascotas)
mismascotas.shift(); // ELIMINA EL PRIMER ELEMENTO DE UN ARRAY
console.log(mismascotas)

let incluyeperro = mismascotas.includes('Zeus'); // INCLUDES SE USA PARA SABER SI EL ARRAY CONTIENE
// UN ELEMENTO LLAMADO ZEUS, ES UNA FORMA DE PREGUNTARLE AL ARRAY SI CONTIENE ESTE ELEMENTO
// PARA USARLO HAY QUE DECLARAR UNA VARIABLE QUE NOS PERMITA EJECUTAR ESTE METODO. ESTE METODO
// DEVUELVE UN VALOR BOOLEANDO, ES DECIR, TRUE OR FALSE.
console.log(incluyeperro)

// METODO EVERY
// Este metodo sirve para preguntar si en un array, los elementos que estan contenidos cumplen
// con una condición.

// EJEMPLO
let numeros = [1,2,3,4,5,6,7];
var esMayorOmenor = numeros.every ((num) => {
    return num <10;
});
console.log(esMayorOmenor) // La consola devuelve true porque los numeros del array son menores
// a 10. 

// METODOS SPLIT Y JOIN
 // Split y join se usan generalmente para convertir arreglos en strings y strings en arreglos.
 // SPLIT = SEPARAR
 //JOIN = UNIR
 // EJEMPLO:

 var palabra = 'Zeuslloraportodo'
 var palabrauno = palabra.split('');
 console.log(palabrauno); 
palabrauno.pop()
console.log(palabrauno)
palabrauno.push('i')
palabrauno.push('t')
palabrauno.push('o')
console.log(palabrauno)
var palabraconjoin = palabrauno.join('');
console.log(palabraconjoin)

// METODO FOREACH: Este metodo va a recorrer el arreglo y a imprimir todos los elementos o los que le pidamos
// Este metodo solo realiza acciones concretas sobre el arreglo, más no modificaciones o cambios en el mismo.
// EJEMPLO:

var numer = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
numer.forEach ((num) => console.log((num)))
console.log(numer)
numer.forEach((num) => { // Esta es una función flecha
    if(num <= 3)
    console.log(num)// En este caso va a imprimir los numeros que sean menores o iguales que 3
    })
//METODO MAP: Map recorre un array y hace cambios en el array, en este caso esta sumando +1
var sumar = numer.map((num) => { // Esta función esta guardada en uma variable que se llama sumar
    return num +1; // esta variable suma +1 a todos los numeros del array y los retorna 
}) 
console.log(sumar)// Este es el return de todos los numeros del array con el +1
