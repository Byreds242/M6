// funcion que simula una tarea asincrona y devuelve una promesa despues de 2 segundos
function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Paso 1 completado"), 2000);
    });
}

// funcion que simula otra tarea asincrona y devuelve una promesa despues de 3 segundos
function paso2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Paso 2 completado"), 3000);
    });
}

// funcion principal que ejecuta el proceso utilizando async/await
async function main() {
    try {
        console.log("Inicio del proceso");
        
        // espera el resultado de la primera tarea asincrona
        const resultado1 = await paso1();
        console.log(resultado1);
        
        // espera el resultado de la segunda tarea asincrona
        const resultado2 = await paso2();
        console.log(resultado2);

        // muestra un mensaje indicando que el proceso se completo con exito
        console.log("Proceso completado");
    } catch (error) {
        // maneja errores en caso de que ocurra algun problema
        console.error("Error:", error);
    }
}

// ejecuta la funcion principal
main();
