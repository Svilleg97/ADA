// BUCLE FOR EN UN ARRAY: ESTE BUCLE INCREMENTA +1 en cada iteración
var arreglo = [1,2,3,4,5]
for (var i = 0; i < arreglo.length; i++){ // i siempre tiene que ser menor que la longuitud. 
   arreglo[i]+= 1; 
}

console.log(arreglo) 

//BUCLE WHILE: ESTE BUCLE VA A INCLUIR LA CANTIDAD DE ELEMENTOS QUE SE INDICAN EN LA CONDICION, Y CUANDO ESTO SE CUMPLA, DEJARA DE EJECUTARSE.
let holi = []; 
while (holi.length < 10){ // El bucle va a agregar MIAW 10 VECES, y cuando se cumpla la condición va a dejar de ejecutarse
holi.push('MIAW')
}
console.log(holi)