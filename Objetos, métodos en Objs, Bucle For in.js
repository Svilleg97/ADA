//OBJETOS: 
// Los objetos son una estructura en la que se puede guardar información y funcionalidades
// Se declaran como cualquier otro tipo de dato y nos permiten ser más especificos. 

//EJEMPLO: 
var animales= {Felinos:['Gato','Pantera','Tigre'], // La estructura de un objeto es clave o propiedad y por otro lado su valor.
// Los objetos pueden tener todas las propiedades que queramos, los valores de cada propiedad podrían ser cualquier otro dato, numeros, 
//strings, o incluso otros objetos. 
 Caninos:['Perro','Lobo']}; 

 // DOT NOTATION Y BRACKET NOTATION:
 // DOT NOTATION: SIGNIFICA NOTACION POR PUNTO
 // BRACKET NOTATION: NOTACION POR CORCHETES

 // Los objetos trabajan con estructura key:value
 // Para acceder a la propiedad de un objeto con el metodo DOT NOTATION, solo hay que poner
 // el nombre del objeto, seguido de un punto y el nombre de la propiedad. 

 var persona= { Nombre: 'Sara', Edad: 26, Profesion: ['Programadora','Abogada']};
 console.log (persona.Edad) //Así accedemos a la información de una propiedad
persona.Nombre = 'Pablo';
console.log(persona.Nombre) // Así modificamos el valor de una propiedad
persona.Edad = 34;
console.log(persona.Edad)

persona.Universidad = ['UdeA','Henry']; //Así agregamos una nueva propiedad a nuestro objeto.
console.log(persona)
delete persona.Profesion;
console.log(persona) // Así eliminamos una propiedad de nuestro objeto
// NO PODEMOS CREAR UNA PROPIEDAD VACIA

// GUARDAR FUNCIONES EN OBJETOS:

var misFunciones = {despedirse : function (){ 
    console.log('Chao con adiós')
}
}
misFunciones.despedirse() // Acá estamos llamando a la función dentro del objeto 

// METODOS EN LOS  OBJETOS (OBJETOS AVANZADOS):
//HasOwnProperty : TIENE SU PROPIEDAD
//Nos permite saber si un objeto tiene una propiedad especifica y el resultado es un valor booleano
var tienepropiedad = {edad: 1, edad2: 2, edad3: 3};
var preguntar = tienepropiedad.hasOwnProperty('edad'); 
console.log(preguntar)// la terminal responde con true porque si tiene la propiedad edad

// KEYS:
// Nos devuelve un arreglo con todas las propiedades que tiene el objeto 
let todaslaspropiedades = Object.keys(tienepropiedad); 
console.log(todaslaspropiedades)// Devuelve un arreglo con todas las propiedades mas no su valor

// BUBLE ESPECIAL FOR IN: Sirve para recorrer un objeto 
var mundo = {contienente : 7, oceanos: 5, países: 195}; 
for (prop in mundo ){
    console.log('Esta es la propiedad: '+ prop); 
    console.log('Este es el valor : '+ mundo[prop]) // Se utiliza mundo[prop] para que acceda a los valores del arreglo
}
//EL BUCLE FOR SIRVE SOLO PARA RECORRER ARREGLOS Y EL FOR IN PARA RECORRER OBJETOS PROPIEDAD POR PROPIEDAD

//OBJETOS THIS: Estamos haciendo referencia a un contexto
var miperrito = {Nombre:'Zeus',
Raza: 'Husky Siberiano', 
Edad: 8,
Llorón: true,
Propietaria: 'Sara Villegas',
info: function (){
    console.log('Mi perrito es un ' + this.Raza); // This. indica el contexto dentro del objeto
}
}; 
miperrito.info()

