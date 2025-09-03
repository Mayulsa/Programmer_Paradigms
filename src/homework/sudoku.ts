// VERIFICAR BLOQUES 9x9   
function verificarSudoku(matriz: number[][]): string {
    for (let fila = 0; fila < 9; fila++) {
        
        let contador: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
        
        for (let columna = 0; columna < 9; columna++) {
            const row = matriz[fila];
            if (!row) return `fila ${fila + 1} esta incompleta`;
            const numero = row[columna];
            if (typeof numero !== "number" || numero < 1 || numero > 9) {
                return `Numero invalido en la fila ${fila + 1}, columna ${columna + 1}`;
            }
            contador[numero] = (contador[numero] ?? 0) + 1;
            if (contador[numero] > 1) {
                return "el sudoku tiene numero repetido en la fila " + (fila + 1);
            }
        }
    }
    for (let columna = 0; columna < 9; columna++) {
        let contador: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
        for (let fila = 0; fila < 9; fila++) {
            const row = matriz[fila];
            if (!row) return `fila ${fila + 1} esta incompleta`;
            const numero = row[columna];
            if (typeof numero !== "number" || numero < 1 || numero > 9) {
                return `Numero invalido en la fila ${fila + 1}, columna ${columna + 1}`;
            }
            contador[numero] = (contador[numero] ?? 0) + 1;
            if (contador[numero] > 1) {
                return "el sudoku tiene numero repetido en la columna " + (columna + 1);
            }
        }
    }

    return "El sudoku es valido";
}

// VERIFICAR BLOQUES 3x3
function verificarSudoku3x3(matriz: number[][]): string {
    for (let fila = 0; fila < 3; fila++) {
        
        let contador: number[] = [0, 0, 0, 0]; 
        
        for (let columna = 0; columna < 3; columna++) {
            const row = matriz[fila];
            if (!row) return `fila ${fila + 1} esta incompleta`;
            const numero = row[columna];
            if (typeof numero !== "number" || numero < 1 || numero > 3) {
                return `Numero invalido en la fila ${fila + 1}, columna ${columna + 1}`;
            }
            contador[numero] = (contador[numero] ?? 0) + 1;
            if (contador[numero] > 1) {
                return "El sudoku 3x3 tiene numero repetido en la fila " + (fila + 1);
            }
        }
    }
    for (let columna = 0; columna < 3; columna++) {
        let contador: number[] = [0, 0, 0, 0];
        
        for (let fila = 0; fila < 3; fila++) {
            const row = matriz[fila];
            if (!row) return `fila ${fila + 1} esta incompleta`;
            const numero = row[columna];
            if (typeof numero !== "number" || numero < 1 || numero > 3) {
                return `Numero invalido en la fila ${fila + 1}, columna ${columna + 1}`;
            }
            contador[numero] = (contador[numero] ?? 0) + 1;
            if (contador[numero] > 1) {
                return "El sudoku 3x3 tiene numero repetido en la columna " + (columna + 1);
            }
        }
    }
    
    return "El sudoku 3x3 es valido";
}

// Sudoku válido
let sudokuValido: number[][] = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// tiene dos 5s en la primera fila
let sudokuConError: number[][] = [
    [5, 3, 4, 6, 7, 8, 9, 1, 5], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

let sudoku3x3Valido: number[][] = [
    [1, 2, 3],
    [3, 1, 2], 
    [2, 3, 1]
];

let sudoku3x3ConError: number[][] = [
    [1, 2, 3],
    [1, 2, 3], 
    [2, 3, 1]
];


// Probar los sudokus
console.log("verificando Sudoku 9x9...");
console.log(verificarSudoku(sudokuValido));
console.log(verificarSudoku(sudokuConError));
console.log("verificando Sudoku 3x3...");
console.log("Resultado:", verificarSudoku3x3(sudoku3x3Valido));
console.log("Resultado:", verificarSudoku3x3(sudoku3x3ConError));