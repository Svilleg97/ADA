//PROTOTIPOS Y HERENCIAS:
// PROTOTIPOS: Esta ligado a los metodos que poseen los objetos y las clases
// Son un mecanismo por el cual todos los objetos o elementos en javascript pueden
//extender sus propiedades y metodos. 

//HERENCIA: Es el mecanismo por medio del cual un prototipo le puede extender sus metodos
// a otros tipos de datos en Javascript. 

Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push('mayor que tres' );
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
 };
  
 var arreglo = [1, 2, 3, 4, 5];
 var nuevoArreglo = arreglo.mayorQueTres();
 console.log(nuevoArreglo); 