/* 5. Crea un script que pregunte tu nombre, apellidos tu ciclo formativo (indicando “DAW” como texto por defecto) y módulo favorito, y
muestre ambos en una ventana emergente, a traves de la consola y traves del documento:
 */

//almacenamos los datos en distintas variables utilizando la funcion prompt:
let nombre = prompt("Escribe tu nombre: ");
let apellidos = prompt("Escribe tus apellidos");
//al introducir un segundo parametro dentro de la funcion prompt, conseguimos asignarle un valor por defecto:
let cursando = prompt("Introduce el ciclo que estas cursando", "DAW");
let asignaturaFavorita = prompt("Cual es tu asignatura favorita?: ");


//Mostramos los datos almacenados a traves de una ventana emergente:
alert(`Hola ${nombre} ${apellidos}, estas cursando un ciclo de ${cursando} y tu asignatura favorita es ${asignaturaFavorita}.`);


//Mostramos los datos almacenados a traves de la consola del navegador:
console.log(`Hola ${nombre} ${apellidos}, estas cursando un ciclo de ${cursando} y tu asignatura favorita es ${asignaturaFavorita}.`);

//Mostramos los datos almacenados en el propio documento HTML:
document.write(`Hola ${nombre} ${apellidos}, estas cursando un ciclo de ${cursando} y tu asignatura favorita es ${asignaturaFavorita}.`);