// Crea una función llamada esPrimo que reciba un número.
// Devuelve true si el número es primo, false si no.
// Pruébala con varios valores.

// Se debe hacer las validaciones correspondientes
let numero: number;
function esPrimo (num: number): boolean{
     if ( num < 1 ) return false;

     if ( num === 2) return true;

     if (num % 2 === 0 ) return false;

     for (let x = 3; x <= Math.sqrt(num); x += 2) {
         if (num % x === 0) return false;
     }
    return true;
};

console.log(esPrimo(8)); //false
console.log(esPrimo(4)); //false
console.log(esPrimo(10)); //false
console.log(esPrimo(23)); //true
console.log(esPrimo(31)); //true
console.log(esPrimo(13)); // true