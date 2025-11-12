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

/*
    Ejercicio 4: Cola de impresión (FIFO)
*/

let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];
colaImpresion.shift();
console.log(colaImpresion);
colaImpresion.push("doc4.docx");
console.log(colaImpresion);
colaImpresion.shift();
console.log(colaImpresion);

/*
    Ejercicio 5: Fila del banco (FIFO)
*/

let fila = ["Ana", "Luis", "Carlos", "Maria"];
fila.splice(1,1);
console.log(fila);
fila.splice(1,0,"Jorge");
console.log(fila);

