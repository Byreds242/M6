// 1. Muestra por consola el orden en que se disparan los eventos click, dblclick, mousedown, mouseup
// Seleccionamos el elemento con el que interactuaremos
const gate = document.getElementById("gate");
const ball = document.getElementById("ball");

// Función para registrar el evento en consola
function logEvent(event) { // imprime el tipo de evento que es (ej. click)
    /*console.log(event.type);*/ // Para mostrar por consola el evnto ejecutado
}

// Asignamos los eventos al "gate"
["mousedown", "mouseup", "click", "dblclick"].forEach(eventType => {
    gate.addEventListener(eventType, logEvent);
});

// También asignamos los eventos a la "ball" para pruebas adicionales
["mousedown", "mouseup", "click", "dblclick"].forEach(eventType => {
    ball.addEventListener(eventType, logEvent);
});
//Mostramos por consola los eventos
// mousedown: No importa si lo mantienes presionado o lo sueltas inmediatamente, el evento se activa
// mouseup:  se dispara cuando se suelta el botón del ratón después de haberlo presionado
// click:  se dispara cuando se presiona y luego se suelta el botón del ratón sobre un elemento
// dblclick:  se dispara cuando haces doble clic


// 2. Cuando se clique el documento, muestra por consola las coordenadas del click (respecto el documento)
document.body.addEventListener("click", function(event) {
    // Muestra las coordenadas del click respecto al documento
    console.log(`Coordenadas del click: X = ${event.clientX}, Y = ${event.clientY}`);
});


// 3. Cuando se clique la pelota, muestra por consola si se ha clicado en qué cuadrante se ha clicado
ball.addEventListener("click", function(event) {
    // Obtenemos las coordenadas del clic y dimensiones del elemento ball
    const ballRect = ball.getBoundingClientRect(); // nos da un objeto con propiedades como left, top, width, height
    const ballX = event.clientX - ballRect.left; // calcula la posicion del la X
    const ballY = event.clientY - ballRect.top; // calcula la posicion del la Y

    // Calculamos los puntos medios de la pelota
    const midX = ballRect.width / 2;
    const midY = ballRect.height / 2;

    // Determinamos en qué cuadrante se hizo clic
    let vertical;
    if (ballY < midY) {
        vertical = "arriba";
    } else {
        vertical = "abajo";
    }

    let horizontal;
    if (ballX < midX) {
        horizontal = "izquierda";
    } else {
        horizontal = "derecha";
    }

    // Mostramos el cuadrante en la consola
    console.log(`Se ha clicado en el cuadrante: ${vertical} ${horizontal}`);
});

// 4. Haz que cuando se mueva el ratón sobre la portería (incluido el portero) se ponga el fondo de la portería verde. Fes servir clase 'goal-zone'
gate.addEventListener("mouseenter", function() {
    gate.classList.add("goal-zone"); // Añadimos la clase 'goal-zone'
});

gate.addEventListener("mouseleave", function() {
    gate.classList.remove("goal-zone"); // Eliminamos la clase 'goal-zone'
});


// 5. Cambiar el fondo de la portería a verde cuando el ratón se mueva sobre ella (excluido el portero)
gate.addEventListener("mousemove", function(event) {
    // Obtenemos las posiciones de la portería y el portero
    const gateRect = gate.getBoundingClientRect();
    const keeperRect = document.getElementById("keeper").getBoundingClientRect();

    // Calculamos si el ratón está sobre la portería pero fuera del área del portero
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const isMouseOverGate = mouseX >= gateRect.left && mouseX <= gateRect.right &&
                            mouseY >= gateRect.top && mouseY <= gateRect.bottom;

    const isMouseOverKeeper = mouseX >= keeperRect.left && mouseX <= keeperRect.right &&
                              mouseY >= keeperRect.top && mouseY <= keeperRect.bottom;

    // Si el ratón está sobre la portería pero no sobre el portero, cambiamos el fondo
    if (isMouseOverGate && !isMouseOverKeeper) {
        gate.classList.add("goal-zone");
    } else {
        gate.classList.remove("goal-zone");
    }
});

// 6. Mostrar el id del elemento del que se sale y al que se entra
document.addEventListener("mouseover", function(event) {
    if (event.target.id) {
        console.log(`Entra en: ${event.target.id}`);
    }
});

document.addEventListener("mouseout", function(event) {
    if (event.target.id) {
        console.log(`Sale de: ${event.target.id}`);
    }
});

// 7. Detectar si el clic fue en la mitad izquierda o derecha del documento
document.addEventListener("click", function(event) {
    const documentWidth = document.documentElement.clientWidth;
    const mouseX = event.clientX;

    if (mouseX < documentWidth / 2) {
        console.log("Clic en la mitad izquierda del documento");
    } else {
        console.log("Clic en la mitad derecha del documento");
    }
});

// 8. Mostrar las propiedades top, left, width, height de la pelota
const ball8 = document.getElementById("ball");

ball.addEventListener("click", function() {
    const ballRect = ball8.getBoundingClientRect();
    console.log("Propiedades de la pelota usando getBoundingClientRect:");
    console.log(`top: ${ballRect.top}`);
    console.log(`left: ${ballRect.left}`);
    console.log(`width: ${ballRect.width}`);
    console.log(`height: ${ballRect.height}`);
});

// 9. Mostrar las propiedades offsetTop, offsetLeft, offsetWidth, offsetHeight de la pelota
ball.addEventListener("click", function() {
    console.log("Propiedades de la pelota usando offset:");
    console.log(`offsetTop: ${ball.offsetTop}`);
    console.log(`offsetLeft: ${ball.offsetLeft}`);
    console.log(`offsetWidth: ${ball.offsetWidth}`);
    console.log(`offsetHeight: ${ball.offsetHeight}`);
});

// 10. Mostrar las coordenadas del portero respecto del documento
const keeper = document.getElementById("keeper");

keeper.addEventListener("click", function() {
    const keeperRect = keeper.getBoundingClientRect();
    console.log("Coordenadas del portero respecto del documento:");
    console.log(`top: ${keeperRect.top}`);
    console.log(`left: ${keeperRect.left}`);
    console.log(`width: ${keeperRect.width}`);
    console.log(`height: ${keeperRect.height}`);
});

// 11. Mover al portero 50px a la derecha, o a la izquierda si se mantiene pulsada la tecla CTRL
keeper.addEventListener("click", function(event) {
    const moveAmount = 50; // Desplazamiento en píxeles
    let newPosition = keeper.offsetLeft; // Posición actual del portero

    // Verificamos si la tecla CTRL está presionada
    if (event.ctrlKey) {
        newPosition -= moveAmount; // Mover a la izquierda si CTRL está presionado
    } else {
        newPosition += moveAmount; // Mover a la derecha si CTRL no está presionado
    }

    // Establecer la nueva posición del portero
    keeper.style.left = `${newPosition}px`;
});

// 12. Muestra por consola la tecla del teclado que se pulsa
document.addEventListener("keydown", function(event) {
    console.log("Tecla pulsada: " + event.key);
});

// 13. Mostrar el elemento que está en las coordenadas absolutas (120,75)
const element = document.elementFromPoint(120, 75);
console.log("Elemento en las coordenadas (120, 75):", element);

// 14. Al hacer click derecho sobre la pelota, que se mueva hacia arriba hasta encontrar la portería.
// Si no cae sobre el portero, mostrar mensaje de GOL por alert
ball.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevenimos el menú contextual del clic derecho

    let ballY = ball.offsetTop; // Obtener la posición inicial de la pelota
    const keeperRect = keeper.getBoundingClientRect(); // Obtener las coordenadas del portero

    // Mover la pelota hacia arriba hasta encontrar la portería
    const interval = setInterval(function() {
        ballY -= 5; // Mover la pelota 5px hacia arriba

        // Actualizar la posición de la pelota
        ball.style.top = `${ballY}px`;

        // Verificar si la pelota ha llegado a la portería
        if (ballY <= keeperRect.bottom) {
            clearInterval(interval); // Detener el movimiento

            // Comprobar si la pelota ha caído sobre el portero
            if (ballY >= keeperRect.top && ballY <= keeperRect.bottom &&
                ball.offsetLeft >= keeperRect.left && ball.offsetLeft <= keeperRect.right) {
                console.log("La pelota ha caído sobre el portero.");
            } else {
                alert("¡GOL!"); // Mostrar mensaje de GOL si no cae sobre el portero
            }
        }
    }, 10); // Repetir el movimiento cada 10ms para suavizar el movimiento
});

// 15. Haz que la pelota sea arrastrable por el ratón (eventos mousedown, mousemove, mouseup)

// Variable para controlar el arrastre
let isDragging = false;

// Posiciones iniciales
let offsetX = 0;
let offsetY = 0;

// Evento mousedown: se dispara cuando el usuario hace clic en la pelota
ball.addEventListener("mousedown", function(event) {
    // Evitar que se active el comportamiento predeterminado de arrastre
    event.preventDefault();

    // Activar el arrastre
    isDragging = true;

    // Calcular el desplazamiento inicial entre el cursor y la pelota
    offsetX = event.clientX - ball.getBoundingClientRect().left;
    offsetY = event.clientY - ball.getBoundingClientRect().top;
});

// Evento mousemove: se dispara cuando el ratón se mueve
document.addEventListener("mousemove", function(event) {
    // Si no se está arrastrando, no hacer nada
    if (!isDragging) return;

    // Calcular la nueva posición de la pelota
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    // Establecer la nueva posición de la pelota
    ball.style.left = `${newX}px`;
    ball.style.top = `${newY}px`;
});

// Evento mouseup: se dispara cuando el usuario suelta el clic
document.addEventListener("mouseup", function() {
    // Desactivar el arrastre
    isDragging = false;
});

