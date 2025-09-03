//pueden recivir on no parametros

function saludar (nombre: string): string{ //void cuando quieres que solo corra lo que esta dentro y no devolver nada
    return `hola, ${nombre}`;
};
console.log(saludar("maicol"));

//arrow function 
const sumar = (a: number, b: number) => {
    return a+b;
};
console.log(sumar(1,3));