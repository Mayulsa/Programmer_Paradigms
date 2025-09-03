//se utilizan para recorer array lista todos esos tipos
for(let i = 1; i <= 5; i++){ //step 1. definir variable, 2. condicion, 3. 
    console.log("iteracion:", i);
}

let contador: number = 0;
while(contador < 3) {
    console.log("contador:", contador);
    contador++; // contador--
    break;
}

let frutas: string[] = ["manzana","banana","cereza"];
for (let fruta of frutas) {
    console.log("fruta", fruta);
}

frutas.forEach(fruta => {
    console.log("fruta:",fruta);
})

for (let indice = 0; indice <= frutas.length-1; indice++){
    console.log(`La fruta actual es ${frutas[indice]}`);
}