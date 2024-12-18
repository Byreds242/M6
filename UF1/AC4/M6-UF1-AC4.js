window.document.write("Hola mundo"); // muestra informacion

console.log(window.location.href); // muestra en consola la ruta
console.log(document.body); // muestra por consola el body
console.log(document.body.childNodes[1].childNodes[1].innerHTML = "PAPA"); // modifica el contenido
console.log(document.body.childNodes[1].childNodes)

let lista = document.getElementById("familia");
lista.style="background-color:green";

let elementos = document.getElementsByClassName("grupo");
console.log(elementos)
elementos[0].innerHTML += "identificado";
elementos[0].style = "color:white";

///////
window.onload = ()=>{
    console.log("El documento esta ready");
    marcarCasilla()
    let casilla = document.querySelector('#casillaTemporal');
    casilla.addEventListener('click',marcarCasilla)
}

function marcarCasilla() {
    let casilla = document.querySelector('#casillaTemporal');
    casilla.style = "background-color; oranged";
    event.target.classList.add("casillaSel");
}


// ================= TASCA 1 =================


// ================= TASCA 4 =================
function createTree4() {
    let json= document.querySelector('textarea').value;
    createTree2(JSON.parse(json));
}

window.onload = () => {

}

// ================= TASCA 5 =================
function toggleColor(event) {
    this.classList.toggle('marcado');
    event.stopPropagation();
}

function createTree4() {
    let json= document.querySelector('textarea').value;
    createTree2(JSON.parse(json));
    let elementos = document.querySelectorAll('li');
    for (let elemento of elementos) {
        elemento.addEventListener('click',toggleColor);
    }
}

window.onload = () => {
    let textarea = document.querySelector('textarea');
    textarea.value = JSON.stringify(data2, null, 2);
    let button = document.querySelector('button');

}

// TASCA 6 
function deleteElement (event) {
    event.preventDefault();
    this.remove();
    event.stopPropagation();
}