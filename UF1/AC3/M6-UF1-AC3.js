// ================= TASCA 1 =================
// PREGUNTA: Per què str.test retorna undefined?
/*
let str = "Hello"; // declaramos la variable y su valor

str.test = 5; // esto no es valido porque str es un valor primitivo y no puede tener propiedades

alert(str.test); // intenta mostrar el valor str.test pero no puede establecerlo, devolvera undefined
*/


// ================= TASCA 2 =================
// PREGUNTA: Com s’expliquen els resultats d’aquestes comparacions d’igualtat?
/*
let str = "Patata"; // declaramos la variable str con su valor "patata"
let str2 = new String("Patata"); // delcaramos otra variable y le asignamos un objeto string

// comparacion debil ==
console.log(str==str2); // Devuelve true porque los valores son equivalentes
// comparacion estrica ===
console.log(str===str2); // Devuelve false porque str es un valor primitivo y str2 es un objeto, por lo que son de diferentes tipos
*/


// ================= TASCA 3 =================
// PREGUNTA: Per què aquest bucle és infinit?
// RESPUESTA: El bucle es infinito porque la suma de 0.2 a i no produce exactamente 10 debido a la precision de los numeros de punto flotante en javaScript
/*
let i = 0;
while (i != 10) {
    i += 0.2;
} // Como resultado, i nunca alcanza el valor exacto de 10 y la condición i != 10 siempre se evalua como verdadera.
*/
 

// ================= TASCA 4 =================
// PREGUNTA: Escriu una funció checkSpam(str) que retorni true si str conté ‘viagra’ o ‘XXX’, i false en cas contrari. La funció ha de ser case-insensitive:
/*
function checkSpam(str) {
    // Convertir la cadena a minusculas
    const lowerStr = str.toLowerCase();
    // Comprobar si contiene 'viagra' o 'xxx'
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Ejemplos 
console.log(checkSpam("buy VIAGRA now")); // true
console.log(checkSpam("Esto no es spam")); // false
console.log(checkSpam("free xxxxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false
*/


// ================= TASCA 5 =================
// PREGUNTA: Escriu una funció toAscii(str) que retorni una llista dels codis ASCII dels caràcters de str. Escribiu una altra funció toChar(chars) que formi una cadena de text a partir de la llista de codis ASCII. Feu servir els mètodes codePointAt i fromCodePoint, respectivament
/*
function toAscii(str) {
    const asciiCodes = [];
    for (let i = 0; i < str.length; i++) {
        asciiCodes.push(str.codePointAt(i));
    }
    return asciiCodes;
}

function toChar(chars) {
    return chars.map(code => String.fromCodePoint(code)).join('');
}

console.log(toAscii("ALBERT"));
console.log(toChar([65,76,66,69,82,84]));
*/


// ================= TASCA 6 =================
// PREGUNTA: Escriu una funció formatDate(date) que formategi date de la següent manera:
// 1. Si des de date ha passat menys d'1 segon, retornarà "right now".
// 2. En cas contrari, si des de date ha passat menys d'1 minut, retornarà "n sec. ago".
// 3. En cas contrari, si és menys d'una hora, reornarà "m min. ago".
// 4. En cas contrari, retornarà la data completa en el format "DD.MM.YY HH:mm". És a dir: "day.month.year hours:minutes", tot en format de 2 dígits, p . ex 31.12.16 10:00.

/*
function formatDate(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 1) {
        return "right now";
    } else if (diffInSeconds < 60) {
        return `${diffInSeconds} sec. ago`;
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} min. ago`;
    } else {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = String(date.getFullYear()).slice(-2); // Last 2 digits of the year
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}
// Ejemplos de uso
console.log(formatDate(new Date())); // "right now"
console.log(formatDate(new Date(Date.now() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(Date.now() - 2 * 60 * 1000))); // "2 min. ago"
console.log(formatDate(new Date(Date.now() - 2 * 3600 * 1000))); // "DD.MM.YY HH:mm"
*/


// ================= TASCA 7 =================
// PREGUNTA: Utilitza el mètode Date.now() per calcular quant de temps (en mil·lisegons) triga a executar-se el següent bucle:
/*
let start = Date.now(); // Obtener el tiempo actual en milisegundos

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i; // Operación dentro del bucle
}

let end = Date.now(); // Obtener el tiempo actual en milisegundos después del bucle
let duration = end - start; // Calcular la duración en milisegundos

console.log(`El bucle a tardado ${duration} ms en ejecutarse.`);
*/


// ================= TASCA 8 =================
// PREGUNTA: Per què es printa false?
// RESPUESTA: El código devuelve false porque meetup es un objeto (tipo "object") y JSON.stringify(meetup) es una cadena (tipo "string"). 
// Al comparar estos dos tipos diferentes, la condición resulta falsa.
/*
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
console.log(typeof(meetup)===typeof(JSON.stringify(meetup)));
*/


// ================= TASCA 9 =================
// PREGUNTA: Quina és la sortida? Per què?
// RESPUESTA: La salida del código es {"participants":[{"name":"John"},{"name":"Alice"}]} porque JSON.stringify solo incluye la propiedad participants del objeto meetup. 
// La propiedad title se omite al especificar el segundo argumento como ["participants"].
/*
let meetup = {
    title: "Conference",
    participants: [{name: "John" }, { name: "Alice" }]
};

// mostrara por pantalla : {"participants":[{"name":"John"},{"name":"Alice"}]}
console.log(JSON.stringify(meetup,["participants"]));
*/

