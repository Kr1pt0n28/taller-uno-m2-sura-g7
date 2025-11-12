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

/*
    Ejercicio 6: Mazo de cartas
*/

let mazo = ["As", "Rey", "Reina", "Jota"];
mazo.reverse();
console.log(mazo);
mazo.shift();
console.log(mazo);

/*
    Ejercicio 7: Gestion de aseintos de cine
*/

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];
asientos.fill("Reservado",1,4);
console.log(asientos);

/*
    Ejercicio 8: Reemplazar elemento
*/

let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];
productos.splice(2,1,"Mouse Nuevo");
console.log(productos);


/*
    Ejercicio 9: orden alfabetico
*/

let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];
estudiantes.sort();
console.log(estudiantes);

/*
    Ejercicio 10: Vaciar un arreglo (fill)
*/

let puntuaciones = [100, 85, 92, 78];
puntuaciones.fill(0);
console.log(puntuaciones);

/* 
    Ejercicio 11: Carrito de compras (combinado)
*/

let carrito = [];
carrito.push("Camisa", "Pantalones");
console.log(carrito);
carrito.unshift("Zapatos");
console.log(carrito);
carrito.splice(1,1);
console.log(carrito);