// import * as readlineSync from 'readline-sync';

// class Tarea {
//     constructor (
//         public titulo: string,
//         public descripcion: string,
//         public completada: boolean = false
//     ){}

//     marcarCompletad(){
//         this.completada = true;
//     }
// }

// let tareas: Tarea[] = [];

// function agregarTarea (titulo: string, descripcion: string){
//     let nueva = new Tarea(titulo, descripcion);
//     tareas.push(nueva);
// }


// function listarTareas() {
//     if (tareas.length === 0) {
//         console.log("No hay tareas disponibles.");
//         return;
//     }
//     console.log("\n--- LISTA DE TAREAS ---");
//     tareas.forEach((t, i) => {
//     console.log(`${i + 1}. ${t.titulo} - ${t.completada ? "✅" : "❌"}`);
//     console.log(`   Descripción: ${t.descripcion}`);
//     });  
//     console.log("----------------------\n");
// }

// function agregarTareaInteractiva() {
//     console.log("\n--- AGREGAR NUEVA TAREA ---");
//     const titulo = readlineSync.question('Ingresa el título de la tarea: ');
//     const descripcion = readlineSync.question('Ingresa la descripción de la tarea: ');
    
//     if (titulo.trim() === '') {
//         console.log("El título no puede estar vacío.");
//         return;
//     }
    
//     agregarTarea(titulo, descripcion);
//     console.log("¡Tarea agregada exitosamente!\n");
// }

// agregarTarea("Estudiar Typescript", "repasar funciona y clases");
// agregarTarea("Correr ejercicio", "correr 5km");
// listarTareas();
// console.log("tareas completadas")
// tareas[0]?.marcarCompletad();
// listarTareas();
// agregarTareaInteractiva();
// listarTareas();