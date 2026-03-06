// Utilização do método charAT()
let texto = "Abacate";
let exCharAt = texto.charAt(1);

console.log(exCharAt);


// Utilização do método charCodeAt()
let exCharCodeAt = texto.charCodeAt(6);
console.log(exCharCodeAt);


// Utilização do método codePointAt()
let exCodePointAt = texto.codePointAt(6);
console.log(exCodePointAt);


// Utilização do método At()
let exAt = texto.at(-2);
let exAtComoArray = texto[2];
console.log(exAt);
console.log(exAtComoArray);

// Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);
console.log(texto3);

// Utilização do método slice()
let frutas = "Uva, Manga e Abacaxi";
let exSlice = frutas.slice(2);
console.log(exSlice);


// Utilização do método toUpperCasa() e toLoweCase
let carro = "Gol gti";
let carro2 = "IMPALA";

let exLowerCase = carro2.toLowerCase();
let exUpperCase = carro.toUpperCase();

console.log(exLowerCase);
console.log(exUpperCase);


// Utilização do método isWellFormed()
let saudacao = "Olá, seja bem-vindo!";
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);


// Utilização do método trim()
let thalison = "                 O Thalison gosta do Corinthians                  ";

let exTrim = thalison.trim();
console.log(exTrim);


