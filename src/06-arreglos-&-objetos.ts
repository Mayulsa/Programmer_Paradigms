
//arreglos ver documentacion de morzilla
let numeros: number[] = [1,2,3,4,5];
numeros.push(6);
console.log("numeros", numeros);

let dobles = numeros.map(n => n*2); // el map es muy duro
console.log("dobles:", dobles);

//esto es un objeto favar siempre escribir el objeto con la primera palabra en Mayuscula
type Persona = {
    nombre: string;
    edad: number;
    IMC?: () => {}; //aqui puede poner funciones este caso es una funcion sin nombre el ? sinifica que puede ser null
};

let persona: Persona = { nombre: "luis", edad: 30};
console.log(`Persona: ${persona.nombre}, ${persona.edad}`);

//esto es una clase tiene de to ya que los objetos no tienen constructores
class Animal {} //se puede usar clases cuando queremos modelar algo de la vida real
let perro = new Animal();

// let listaPersona: Persona[] = [{ nombre: "luis", edad: 30},{ nombre: "Maria", edad: 20}]
// for (let persona of listaPersona){
//     console.log (`Persona: `)
// }