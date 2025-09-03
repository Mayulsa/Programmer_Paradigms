let edad: number = 27;

if (edad >= 18){
    console.log("Eres mayor de edad");
}// se puede mejorar

//esto es para qeu no sue magic number (numeros magicos)
//los numeros magicos no se sabe que representa a menos que lo digas en una variable.
let mayoriaDeEdad: number = 18;

//si el if osl o va a tener una sola linea o instruccion de codigo no es necesario los {}
if (edad >= mayoriaDeEdad){
    console.log("es mayor");
}

//Se puede usar asi pero no lo hagan
if (edad >= mayoriaDeEdad) console.log("mayor");

//ejemplo usando operadores ternario, su simbolo ?
let esMayor = edad > mayoriaDeEdad ? "Es mayor de edad" : "Eres menor de edad";


// Y si no?
if (edad >= mayoriaDeEdad){
    console.log("es mayor");
} else if(edad < mayoriaDeEdad) {
    console.log("no es mayor");
} else {

}

//switch
let color: string = "rojo";

switch (color){
    case "rojo":
        console.log("es color es rojo");
    break;
    case "azul":
        console.log("es de color azul");
    break;
    default:
        console.log("otro color");
}