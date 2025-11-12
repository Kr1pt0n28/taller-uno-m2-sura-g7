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

tareas.shift();
console.log(tareas);
tareas.shift();
console.log(tareas);

/*
    Ejercicio 3: pila de libros (LIFO)
*/

let historial = ["google.com" , "youtube.com" , "facebook.com"];
historial.pop();
console.log(historial);
historial.pop();
console.log(historial);