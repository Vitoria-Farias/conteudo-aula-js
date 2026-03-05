// Exercício 9: Escreva um algoritmo para ler as dimensões de um trapézio (base e altura), calcular e escrever a área do trapézio.

alert("Área do Trapézio");

let B = parseFloat(prompt("Informe o valor da base  maior do trapézio: "));
let b = parseFloat(prompt("Informe o valor da base menor do trapézio: "));
let altura = parseFloat(prompt("Informe o valor da altura do trapézio: "));


let areaTrapézio = ((B + b) * altura) /2;

alert("O resultado da área de um trapézio é: " + areaTrapézio);
