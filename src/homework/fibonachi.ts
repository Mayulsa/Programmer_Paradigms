function fibonacci(n: number): void {

    let num1: number = 0;
    let num2: number = 1;
    let siguiente: number;
    
    
    if (n <= 0) {
        console.log("El número debe ser mayor que 0");
        return;
    }
    
    
    if (n >= 1) {
        console.log(num1); // Imprime 0
    }
    
    
    if (n >= 2) {
        console.log(num2); // Imprime 1
    }
    
    
    for (let i = 3; i <= n; i++) {
        siguiente = num1 + num2; // Sumamos los dos números anteriores
        console.log(siguiente);  // Mostramos el result
        num1 = num2;
        num2 = siguiente;
    }
}

// Ejemplos de uso:
console.log("Fibonacci hasta 6:");
fibonacci(6);

console.log("\nFibonacci hasta 8:");
fibonacci(8);

console.log("\nFibonacci hasta 1:");
fibonacci(1);