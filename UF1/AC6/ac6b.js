// 1. Quina és la diferència de comportament entre aquests dos fragments de codi? Per què?
// Fragmento A
window.onload = () => {
    // querySelectorAll devuelve una lista estática de elementos.
    let items = document.querySelectorAll('.item');
    console.log(items.length);  // Muestra el número inicial de elementos.
    items[items.length - 1].remove();  // Elimina el último elemento.
    console.log(items.length);  // La longitud no cambia (lista estática).
}

// Fragmento B
window.onload = () => {
    // getElementsByClassName devuelve una colección en vivo.
    let items = document.getElementsByClassName('item'); 
    console.log(items.length);  // Muestra el número inicial de elementos.
    items[items.length - 1].remove();  // Elimina el último elemento.
    console.log(items.length);  // La longitud se actualiza (colección en vivo).
}

let llista = ["Cervantes", "Quevedo", "Lope de Vega", "Calderón"];


// La resta de tasques es fan a partir de la variable llista. Printa per consola, en cada cas, el resultat de l'operació.


// 2. Afegeix un element al final de la llista
console.log("########### TASCA 2 ###########")
llista.push("Eminem");
console.log(llista);


// 3. Elimina el darrer element de la llista
console.log("########### TASCA 3 ###########")
llista.pop();
console.log(llista);


// 4. Elimina el primer element de la llista
console.log("########### TASCA 4 ###########")
llista.shift();
console.log(llista);


// 5. Afegeix un element al principi de la llista
console.log("########### TASCA 5 ###########")
llista.unshift("Drake");
console.log(llista);


// 6. Afegeix tres elements entre "Quevedo" i "Lope de Vega"
console.log("########### TASCA 6 ###########")
llista.splice(2, 0, "Messi", "Cristiano", "Neymar");
console.log(llista);


// 7. Elimina el segon i el tercer elements de la llista
console.log("########### TASCA 7 ###########")
llista.splice(1, 2);
console.log(llista);


// 8. Crea una llista2 amb els dos darrers elements de la llista (mètode splice)
console.log("########### TASCA 8 ###########")
let llista2 = llista.splice(-2);
console.log(llista2);


// 9. Crea una llista3 amb els dos darrers elements de la llista (mètode slice)
console.log("########### TASCA 9 ###########")
let llista3 = llista.slice(-2);
console.log(llista3);


// 10. Concatena llista3 al final de llista2
console.log("########### TASCA 10 ###########")
llista2 = llista2.concat(llista3);
console.log(llista2);


// 11. Assigna llista2 a un nou array llista4 i comprova que la còpia s'ha fet per referència
console.log("########### TASCA 11 ###########")
let llista4 = llista2;
llista2.push("Nuevo elemento");
console.log(llista4);  // tambien muestra "nuevo elemento"

// 12. Comprova si llista2 i llista4 tenen els mateixos elements
console.log("########### TASCA 12 ###########");

if (JSON.stringify(llista2) === JSON.stringify(llista4)) {
    console.log("llista2 y llista4 tienen los mismos elementos.");
} else {
    console.log("llista2 y llista4 NO tienen los mismos elementos.");
}


// 13. Comprova si llista4 és un array.
console.log("########### TASCA 13 ###########");

if (Array.isArray(llista4)) {
    console.log("llista4 és un array.");
} else {
    console.log("llista4 NO és un array.");
}


// 14. Serveix aquesta instrucció per eliminar correctament l'element de la llista
console.log("########### TASCA 14 ###########")
// delete llista4[1];
console.log("No elimina correctamente el elemento de la lista porque solo establece el valor en esa posición como undefined")
// para eliminar correctamente el elemento y ajustar la longitud, utilizamos splice

// 15. Elimina el 2n element de la llista4
console.log("########### TASCA 15 ###########");
llista4.splice(1, 1);  // Elimina el segundo elemento (indice 1)
console.log(llista4);   // Muestra el array después de eliminar el segundo elemento


// 16. printa per pantalla los elementos de llista4, un a un
console.log("########### TASCA 16 ###########");

for (let i = 0; i < llista4.length; i++) {
    console.log(llista4[i]);
}

// 17. printa per pantalla las claves de llista4, una a una
console.log("########### TASCA 17 ###########");

for (let i = 0; i < llista4.length; i++) {
    console.log(i);  // imprime el indice(clave) de cada elemento
}


// 18. Fes servir el mètode forEach per printar per consola tots els elements de llista4 en majúscules
console.log("########### TASCA 18 ###########");

llista4.forEach(element => {
    console.log(element.toUpperCase());  // convierte cada elemento a mayúsculas
});


// 19. Ordena alfabèticament la llista4
console.log("########### TASCA 19 ###########");
llista4.sort();  // ordena los elementos alfabeticamente
console.log(llista4);  // muestra la lista ordenada


// 20. Ordena la llista4 pel nombre de lletres de cada element, de menor nombre de lletres a major
console.log("########### TASCA 20 ###########");
llista4.sort((a, b) => a.length - b.length);  // ordena por longitud de los elementos
console.log(llista4);  // muestra la lista ordenada por longitud

console.log();