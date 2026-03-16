//Defininfo um array global
const times = ["São Paulo", "Corinthians", "Flamengo", "Fluminense"];

//Utilizando o método indexOf
let posicaoItem = times.indexOf("Flamengo");

console.log(times);
console.log(posicaoItem)

//Utilizando o método lastIndexOf()
const times2 = ["São Paulo", "Corinthian", "São Paulo", "Flamengo"];

let posicaoItem2 = times2.lastIndexOf("São Paulo");

console.log(posicaoItem2)
console.log(times2);

//Utilizando o método includes()
let verificaExistenciaItem = times.includes("Flamengo");

console.log(verificaExistenciaItem);


// Utilizando o método find()
const number = [4, 6, 83, 64, 2, 16]
let encontarMaior = number.find(verificarValor);

function verificarValor(valor) {
    return valor > 50;
}

console.log(encontarMaior);


// Utilizando o método findIndex()
let encontarIndice = number.findIndex(verificarValor);
console.log(encontarIndice);


// Utilizando o método findLast()
let encontarMaiorFinal = number.findLast((valor) => valor > 50);
console.log(encontarMaiorFinal);


// Utilizando o método findLastIndex()
let encontarIndiceMaiorFinal = number.findLastIndex((valor) => valor > 50);
console.log(encontarIndiceMaiorFinal);