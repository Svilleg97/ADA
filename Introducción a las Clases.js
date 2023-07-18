// ENTIDADES: Representanción de conceptos del mundo real: En Instagram Usuarios y Publicaciones
//Las clases son un conjunto de datos que pertenencen a una entidad, son plantillas o modelos de una entidad

// CLASE: ANIMAL
// PROPIEDADES DE LA CLASE ANIMAL: OJOS, COLOR, HABITAT - La clase animal nos permite tener un concepto base para 
// representar animales del mundo real, para luego crear o modelar con código todo tipo de animales a partir de ella
//algunos compartiran las mismas caracteristicas y otros no. 

// MANERAS PARA DECLARAR UNA CLASE: 
// HAY DOS SINTAXIS, POR UN LADO ESTA LA FUNCION CONSTRUCTORA Y POR OTRO LADO LA EXPRESION DE CLASE
//Para declarar una clase la primera letra del nombre de nuestra clase SIEMPRE DEBE IR EN MAYUSCULA
// Las clases también tienen propiedades y metodos. 

function Perro(raza, edad, nombre){
this.raza = raza; 
this.edad = edad;
this.nombre = nombre;
this.informacion = function (){
    console.log('Mi perrito se llama ' + this.nombre + ' y yo lo amo mucho, porque es un '+ this.raza + '.');
}
}; 

var miperrito = new Perro ('Husky Siberiano', 8, 'Zeus'); 
console.log(miperrito);
console.log(miperrito.edad)
miperrito.informacion() 

// Podemos reutilizar la clase PERRO para crear nuevos perros

// EXPRESION DE CLAE: FORMA MAS NUEVA Y SENCILLA PARA DECLARA UNA CLASE
class perrito {
    constructor (name, ower, age){
        this.name = name;
        this.ower = ower;
        this.age = age;

        }
        informacion (){
            console.log ('Este perrito es un salshisha que se llama ' + this.name + ' y tiene ' + this.age + ' año' + '.')
        }
    }; 
var misegundoperrito = new perrito ('Gus', 'Sara Villegas', 1);
console.log(misegundoperrito)
console.log(misegundoperrito.age)
console.log(misegundoperrito.name)
console.log(misegundoperrito.ower)
misegundoperrito.informacion()

// This nos permite indicarle al código de qué contexto necesitamos información 

