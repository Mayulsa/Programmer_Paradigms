// Declara un arreglo de estudiantes, cada uno con nombre y nota.
// Ejemplo: [{ nombre: "Ana", nota: 90 }, { nombre: "Luis", nota: 70 }]
// Recorre el arreglo e imprime:
//  "Ana aprobó" o "Luis reprobó" según si la nota >= 70.

type Estudiante = {
    nombre: string;
    nota: number;
};

let estudiantes: Estudiante[] = [
    {nombre: "Maicol",nota: 90},
    {nombre: "Rosa",nota: 70},
    {nombre: "Martinez",nota: 85},
    {nombre: "Pedro",nota: 60}
];

for (let estudiante of estudiantes) {
    if(estudiante.nota >= 70){
        console.log(`${estudiante.nombre} Aprobo!!`)
    }
    else {
        console.log(`${estudiante.nombre} Reprobo :(`)
    }
    
};


///------------------Outputs:------------------
// Maicol Aprobo!!
// Rosa Aprobo!!
// Martinez Aprobo!!
// Pedro Reprobo :(

