//ACCESO A PROPIEDADES
console.log("ACCESO A PROPIEDADES")
let user = {
    name : "ethan",
    age : 40
}

user.apellido = "seisdedos";

console.log(user)

//delete user()

//PROPIEDADES SHORTAND
console.log("PROPIEDADES SHORTAND")
//Funcion para retornar valores
function makeUser (name, age) {
    return {
        name,
        age
    }
}

nuevoUser = makeUser("sebas",22); // lo guardamos en la variable nuevoUser
console.log(nuevoUser); // lo mostramos por pantalla


// ITERANT SOBRE PROPIEDADES DE UN OBJETO
console.log("ITERANT SOBRE PROPIEDADES DE UN OBJETO")
for (let clave in user) {
    console.log(user[clave]);
    //console.log($(clave) );
}


// OBJETOS ALMACENADOS POR REFERENCIA
// con esto podremos llamar a nuestras variables por distinto nombre
console.log("OBJETOS ALMACENADOS POR REFERENCIA")
let user2; 
user2 = user;

user2.name = "pepe";
console.log(user.name); // nos mostrara pepe
console.log(user2.name); // nos mostrara pepe

// REFERENCIA DOM CON BUTTON
let button = document.getElementById("boton1");
button.innerHTML = "nuevo texto";