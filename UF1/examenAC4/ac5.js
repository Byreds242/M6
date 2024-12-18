// 1. Saca por consola todo el contenido del body sin utilizar ningún método de document
console.log("====== TASCA 1 ======");
console.log(document.body.innerHTML); // muesta el contenido html

//======================================================================================================================

// 2. Saca por consola el texto del elemento #titulo sin utilizar ningún método de document
console.log("====== TASCA 2 ======");
//console.log(título.innerHTML);

//======================================================================================================================

// 3. Saca el contenido del tercer li usando el método querySelector
console.log("====== TASCA 3 ======");
console.log(document.querySelector('ul li:nth-child(3)').innerHTML);

//======================================================================================================================

// 4. Saca el contenido del tercer li usando el método querySelectorAll
console.log("====== TASCA 4 ======");
console.log(document.querySelectorAll('ul li')[2].textContent);

//======================================================================================================================

// 5. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let elementos = document.querySelector('li');
// elementos[2].remove();
console.log("====== TASCA 5 ======");
// RESPUESTA: nos aparecera un error ya  que elemntos es una referencia a un solo elemento <li> y no una coleccion de elementos.
// querySelector selecciona soo el primer elemento que coincide con el selector proporcionado y no una lista de nodos

//======================================================================================================================

// 6. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let lista = document.querySelectorAll('ul');
// lista.remove();
console.log("====== TASCA 6 ======");
// RESPUESTA: aparecera un error ya que lista es un nodelist, no un unico elemento
// queryselectorall devuelve una lista de nodos cuando seleccionas multiples elementos y los nodelist no tienen un metodo

//======================================================================================================================

// 7. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad children
console.log("====== TASCA 7 ======");
let lista = document.querySelector('ul');
lista.children[1].remove();
console.log("El segundo elemento a sido eliminado con children");

//======================================================================================================================

// 8. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad childNodes
console.log("====== TASCA 8 ======");
let lista8 = document.querySelector('ul');
lista8.childNodes[3].remove();
console.log("El segundo elemento a sido eliminado con childNodes");

//======================================================================================================================

// 9. Completa este código para que se ponga de color azul el hermano siguiente al primer elemento de la lista
// let elemento = document.querySelector('li:first-child');
console.log("====== TASCA 9 ======");
let elemento = document.querySelector('li:first-child');
elemento.nextElementSibling.style.color = 'blue';
console.log("El tercer elemento se a cambiado a color azul")

//======================================================================================================================

// 10. Completa este código para que se pongan de color azul él y todos sus hermanos
// let elemento = document.querySelector('li:first-child');
console.log("====== TASCA 10 ======");
let elemento10 = document.querySelector('li:first-child');

while (elemento10) {
    elemento10.style.color = 'blue';
    elemento10 = elemento10.nextElementSibling;
}
console.log("Todods los elementos se han cambiado al color azul")

//======================================================================================================================

// 11. ¿Por qué no podemos acceder así al atributo 'tema' del #título?
// let titulo = document.querySelector('#titulo');
// console.log(titulo.tema);
console.log("====== TASCA 11 ======");
// RESPUESTA: no podremos acceder utlizando titulo.tema porque tea no es una propiedad estandar del objeto DOM en js

//======================================================================================================================

// 12. Saca por consola el valor del atributo 'tema' del #título
console.log("====== TASCA 12 ======");
let titulo = document.querySelector('#titulo');
console.log(titulo.getAttribute('tema'));

//======================================================================================================================

// 13. Añade al título el atributo 'cfgs' con valor 'daw'
console.log("====== TASCA 13 ======");
let titulo13 = document.querySelector('#titulo');
titulo13.setAttribute('cfgs', 'daw');
console.log(titulo13.getAttribute('cfgs')); // Debería mostrar "daw" en la consola

//======================================================================================================================

// 14. Cambia el id del h3 sin utilizar el método setAttribute
console.log("====== TASCA 14 ======");

//======================================================================================================================

// 15. ¿Este código añade correctamente la classe 'elem' a los elementos de la lista?
// let elementos = document.querySelectorAll('.item');
// for (let elemento of elementos){
//     elemento.className = "elem";
// }
console.log("====== TASCA 15 ======");
// RESPUESTA: no, no añade correctamente la classe elem a los elementos de la lista porque asigna el calor de className directamente 
// lo que remplaza cuakquier clase existente en esos elementos
let elementos = document.querySelectorAll('.item');
for (let elemento of elementos) {
    elemento.className = "elem"; // Reemplaza todas las clases existentes con "elem"
}

//======================================================================================================================

// 16. Añade correctamente a los elementos de la lista la clase "item"
console.log("====== TASCA 16 ======");
let elementos16 = document.querySelectorAll('li'); // Selecciona todos los elementos <li>
for (let elemento of elementos) {
    elemento.classList.add('item'); // Añade la clase "item"
    console.log(`la clase"item" se ha añadido correctamente: ${elemento.textContent}`);
}

//======================================================================================================================

// 17. ¿Es correcta la salida por consola?
// let primerElemento= document.querySelectorAll('.item')[0];
// primerElemento.classList.add("elem");
// console.log(primerElemento.className);
console.log("====== TASCA 17 ======");
let primerElemento = document.querySelectorAll('.item')[0];
primerElemento.classList.add("elem");
console.log(primerElemento.className);
// RESPUESTA: la salida por consola es correcta

//======================================================================================================================

// 18. Añade un Cuarto Elemento al final de la lista
console.log("====== TASCA 18 ======");
let lista18 = document.querySelector('ul'); // Selecciona el elemento <ul>
let nuevoElemento = document.createElement('li'); // Crea un nuevo elemento <li>
nuevoElemento.textContent = 'Cuarto Elemento'; // Establece el texto del nuevo elemento
lista18.appendChild(nuevoElemento); // Añade el nuevo <li> al final de la lista

//======================================================================================================================

// 19. Añade un Elemento Cero al principio de la lista
console.log("====== TASCA 19 ======");
let lista19 = document.querySelector('ul'); // Selecciona el elemento <ul>
let nuevoElemento19 = document.createElement('li'); // Crea un nuevo elemento <li>
nuevoElemento19.textContent = 'Elemento Cero'; // Establece el texto del nuevo elemento

// Inserta el nuevo <li> antes del primer hijo de <ul>
lista.insertBefore(nuevoElemento, lista.firstChild);
console.log("Elemento cero se ha añadido correctamente");

//======================================================================================================================

// 20. Duplica el Tercer Elemento a continuación de éste en la lista
console.log("====== TASCA 20 ======");
let lista20 = document.querySelector('ul'); // Selecciona el elemento <ul>
let tercerElemento = lista.children[2]; // Selecciona el tercer <li> (índice 2)
let nuevoElemento20 = document.createElement('li'); // Crea un nuevo elemento <li>
nuevoElemento.textContent = tercerElemento.textContent; // Duplica el contenido del tercer elemento

// Añade el nuevo <li> justo después del tercer elemento
lista.insertBefore(nuevoElemento, tercerElemento.nextSibling);
console.log("el tercer elemento se a duplicado correctamente")