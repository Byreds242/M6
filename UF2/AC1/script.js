// TASCA 1
// script.js
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.addEventListener('load', callback);
    script.addEventListener('error', function() {
        console.error(`Error al cargar el script ${src}`);
    });

    document.head.append(script);
}

// Cargar el script 1.js y luego ejecutar funcion1
loadScript('1.js', function() {
    funcion1(); // Llamada a la función después de cargar el script
});

// A. A l’script principal, prova de cridar funcion1 just després de la càrrega de l’script.
// RESPUESTA: Uncaught ReferenceError: funcion1 is not defined
// RESPUESTA: El problema es porque la funcion funcion1 aun no esta disponible en el momento en que intentas llamarla.

// B. 