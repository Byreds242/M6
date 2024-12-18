//ACT1 Y 2
function prueba() {
    var var1 = 0;
}

if(true) {
    var2 = 0;
}
console.log(var1)

//ACT3
let num = "10";
console.log(typeof Number(num));
console.log(parseInt(num));
S
//ACT4
console.log(Number(undefined));
console.log(null==undefined);
console.log(null===undefined);
console.log(typeof(Infinity)===typeof(-Infinity));


//
let tepemperatura = 25;
let climas = (tepemperatura>100) ? "calor" : "frio";
let clima;

//ACT 8 
let temp;
let result = (temp = null && temp != undefined) ? temp : "no hay datos";
result = (temp ?? "no hay datos");

//ACT 10
function saludar(nom = "Anònim") {
    console.log(`Hola, ${nom}!`);
  }
  
  saludar("Joan");  // Sortida: "Hola, Joan!"
  saludar();        // Sortida: "Hola, Anònim!" (es fa servir el valor per defecte)