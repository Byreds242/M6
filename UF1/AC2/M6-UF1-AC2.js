// TASCA 1
// Escriu una funció per sumar tots els salaris inclosos en un objecte salaries com aquest (l’objecte pot emmagatzemar un nombre indefinit de salaris):
// OBJETO SALARIOS
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130

}

// FUNCION SUMA SALARIOS
function sumaSalaries(salaries) {
    let total = 0;
    for (let key in salaries) {
        total += salaries[key];
    }
    return total;
}

console.log("===== TASCA 1 =====")
console.log(sumaSalaries(salaries)); // Output: 390

// TASCA 2
// Tasca 2. Escriu un fragment de codi que demostri la diferència entre copiar un objecte: REFERENCIA, CLONADO Y CLONADO ESTRUCTURADO O RECURSIVO
console.log("===== TASCA 2 =====")
// Objeto original
let user = {
    name: "Alice",
    age: 30,
    address: {
        city: "Barcelona",
        country: "Spain"
    }
};

// POR REFERENCIA
let referenceCopy = user;
referenceCopy.name = "Bob";  // Cambia el valor en `user` también, ya que apuntan al mismo objeto.

console.log("user despues de la copia por referencia:", user.name); // Output: "Bob"

// CLONADO
let shallowClone = Object.assign({}, user);
shallowClone.name = "Charlie"; // Cambia el nombre solo en `shallowClone`.
shallowClone.address.city = "Madrid"; // Cambia también en `user` ya que la copia es superficial.

console.log("user despues del clon superficial:", user.name); // Output: "Bob"
console.log("user despues del clon superficial (address):", user.address.city); // Output: "Madrid"

// CLONADO ESTRUCTURADO
//let userClone = structuredClone({},user);
let deepClone = JSON.parse(JSON.stringify(user));
deepClone.name = "Dave"; // Cambia el nombre solo en `deepClone`.
deepClone.address.city = "Valencia"; // Cambia la dirección solo en `deepClone`.

console.log("user despues del clon estructurado:", user.name); // Output: "Bob"
console.log("user despues del clon estructurado (direccion):", user.address.city); // Output: "Madrid"
console.log("Deep Clone (direccion):", deepClone.address.city); // Output: "Valencia"

// TASCA 3
// Donada aquesta família family:
// a) Què farà què esborrarà de memòria el garbage collector si fem:
console.log("===== TASCA 3 =====")
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry ({
    name: "John"
}, {
    name: "Ann"
});

// Elimina la propiedad father del objeto family
delete family.father; // family ya no tendrá la referencia a man (John)

// Elimina la propiedad husband del objeto family.mother
delete family.mother.husband; //family.mother es la referencia a woman (Ann) y husband es la propiedad que apunta a man

// Eliminaremos la referencia al objeto family
// family = null; 

console.log(family.father) //undefined
console.log(family.mother) // Ann


// TASCA 5
// a) A quin objecte fa referència user.ref?
console.log("===== TASCA 5 =====")
function makeUser() {
    let objeto = {
        name : "John",
        ref : function() {
            return this;
        }
    }
}

console.log(makeUser().ref())

//let user5 = makeUser();

// ref es un método del objeto retornado, por lo que this hará referencia al propio objeto user5
//console.log(user5.ref) // Ahora `ref` hace referencia al objeto `user5`

// b) Com podríem fer que user.ref apunti sempre a user?

// lo podriamos asignar manualmente que seria cambiando el ref: this por:
//user.ref = user;
//return user;


//TASCA 6
// Crea una calculadora amb els mètodes read, sum i mul.
console.log("===== TASCA 6 =====")

let calculator = {
    // Propiedades para almacenar los números
    n1: 0,
    n2: 0,

    // Método para leer los valores de 'a' y 'b'
    read() {
        this.n1 = parseFloat(prompt("Ingrese el primer numero:"));
        this.n2 = parseFloat(prompt("Ingrese el segundo numero:"));
    },

    // Método para sumar 'a' y 'b'
    sum() {
        return this.n1 + this.n2;
    },

    // Método para multiplicar 'a' y 'b'
    mul() {
        return this.n1 * this.n2;
    }
};

calculator.read();             // Se solicita al usuario que ingrese los números
console.log(calculator.sum()); // Muestra la suma de 'a' y 'b'
console.log(calculator.mul()); // Muestra la multiplicación de 'a' y 'b'

// TASCA 7
console.log("===== TASCA 7 =====")
let escalera = {
    escalon : 0,
    subir(){
        this.escalon ++;
        return this;
    },
    bajar(){
        this.escalon --;
        return this;
    },
}

escalera.subir();
escalera.subir();
escalera.subir();
escalera.bajar();

console.log(escalera.escalon)