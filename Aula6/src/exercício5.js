// Exercício 5: Escreva um algoritmo para ler um valor (do teclado) o seu antecessor.

alert("Antecessor");

let valor = parseFloat(prompt("informe um valor do seu teclado para retornar o seu antecessor: "));

let antecessor = (valor - 1);

alert("O antecessor de " + valor + " é: " + antecessor);