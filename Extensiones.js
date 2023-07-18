class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. y tengo  ' + this.edad
       );
    }
 }

 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad); //La palabra reservada super, permite heredar nombre y edad de la clase persona. 
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.saludar(); 