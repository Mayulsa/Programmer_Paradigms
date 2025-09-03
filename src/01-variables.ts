//crear variables:  var, let, const  "ojo no se usa var"

let nombre: string = "Maicol";
let edad : number = 27;
let activo: boolean = true;


//Template String `${variable}`
console.log(`hola mi nombre es: ${nombre}`);



// inferencia de tipo
let ciudad = ["nagua", true]; //esto es horrible no lo hacer variables con dos tipos de este tiene string y booleang >:(
let municipio = "nagua";

//variables globales y  locales
function calcular () : number {
    let resultadoLocal = 1; //scope local
    console.log(resultadoGlobal) //como resultadoGlobal es de scope global podemos accader
    return resultadoLocal
}

let resultadoGlobal = 0; //scope global
//console.log(resultadoLocal); // como resultadoLocal es de scope local no podemos acceder

const resultado = calcular(); // usamos "const" porque el valor de la funcion tiene que ser constante
console.log(resultado);