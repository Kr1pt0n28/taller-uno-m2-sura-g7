/*
    Ejercicio 1: Lista del Súpermercado
*/
let compras = ["Manzanas"];
compras.push("Leche", "Pan");
console.log(compras)

compras.unshift("Huevos");
console.log(compras);

compras.splice(1,1);
console.log(compras);

/*
    Ejercicio 2: Pila de Tareas Pendientes (LIFO)
*/

let tareas = ["Revisar emails"];
tareas.unshift("Llamar al cliente");
console.log(tareas);

tareas.unshift("Preparar reporte");
console.log(tareas);

tareas.splice(0,1);
console.log(tareas);
tareas.splice(0,1);
console.log(tareas);

