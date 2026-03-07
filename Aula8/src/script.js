// Utilização do método padStar()
let texto = '7';
texto = texto.padStart(3, '0');

console.log(texto);

// Utilização do método padEnd()
let texto2 = '7';
texto2 = texto2.padEnd(3, '0');

console.log(texto2);

// Utilização do método repeat()
let fruta = 'Abacaxi ';
let repeticao = fruta.repeat(4);

console.log(repeticao);

// Utilização do método replace()
let carro = 'Impala';
let novoCarro = carro.replace('Impala', 'Supra');

console.log(novoCarro);


// Utilização do método replaceAll()
let frase = 'Morais ama gatos. Gatos são legais. Gatos o encanta.';

frase = frase.replaceAll('Gatos', 'Cats');
frase = frase.replaceAll('gatos', 'cats');

console.log(frase);


// Utilização do método Split()
let saudacao = 'Olá, seja bem-vinda';
let exSplit = saudacao.split(" ");

console.log(exSplit);


// Utilização dos métodos indexOf(), lastIndexOf() e search()
let exemplo = "Por favor localize onde 'localize' ocorre.";

let exIndexOf = exemplo.indexOf('localize');

let exLastIndexOf = exemplo.lastIndexOf('localize');

let exSearch = exemplo.search('favor');

console.log(exIndexOf);
console.log(exLastIndexOf);
console.log(exSearch);


// Utilização do método includes()
let olaMundo = 'Olá, mundo. Bem-vindo ao universo.';
let exIncludes = olaMundo.includes('mundo');

console.log(exIncludes);


// Utilização do método startsWith()
let olaMundo2 = 'Olá, mundo. Bem-vindo ao universo.';
let exStartsWith = olaMundo2.startsWith('Olá');
let exStartsWith2 = olaMundo2.startsWith('universo');

console.log(exStartsWith);
console.log(exStartsWith2);


// Utilização do método endsWith()
let nome = 'Vitoria Farias';
let exEndsWith = nome.endsWith('Farias');

console.log(exEndsWith);







