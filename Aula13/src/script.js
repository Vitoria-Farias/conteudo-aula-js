// Array global
const frutas = ["Morango", "Abacaxi", "Acerola", "Manga"];

// Utilizando a propriedade length()

//let tamanhoFrutas = frutas.length;

//frutas.length = 2;

console.log(frutas);


// Utilizando o método toString()
let minhasFrutas = frutas.toString();

console.log(minhasFrutas);


// Utilizando método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas[1];

console.log(itemFrutas);
console.log(itemFrutas2);


// Utilizando o método join()
let apresentacaoFrutas = frutas.join(" / ");
console.log(apresentacaoFrutas);


// Utilizando o método pop()
let removerItemFrutas = frutas.pop();
console.log(frutas);
console.log(removerItemFrutas);


// Utilizando o método push()
let adicionarItemFrutas = frutas.push("Limão");

console.log(frutas);
console.log(adicionarItemFrutas);


// Utlizando método shift()
let deslocarItemsFrutas = frutas.shift();
console.log(frutas);
console.log(deslocarItemsFrutas);


// Utilizando o método unshift()
let deslocarItemsFrutas2 = frutas.unshift("Melão");
console.log(frutas);
console.log(deslocarItemsFrutas2);

frutas[0] = "Kiwi";
console.log(frutas);


// Utilizando o length para adicionar items ao array
frutas[frutas.length] = "Laranja";

console.log(frutas);


// Utilizando o método isArray()
console.log(Array.isArray(frutas));


// Utilizando o método delete()
//delete frutas[0];
//delete frutas[4];
//console.log(frutas);


// Utlizando o método concat()
const motos = ["Hornet", "Ducati", "Yamaha"];
const carros = ["Gol", "Onix", "Marea"];

const veiculos = motos.concat(carros);

console.log(veiculos);


// Utlizando o copyWithin()
let copiaItems = frutas.copyWithin(2, 0);
console.log(frutas);


//Exexmplo de matriz em JavaScript
const matriz = [[1, 2], [3, 4], [5, 6]];

console.log(matriz[0][1]);


//Exemplo de vetor em JavaScript (array unidimensional)
const comida = ["Pizza", "Hamburguer", "Lazanha"];


// Utilizando o método flat()
const listaNumeros = [[1, 2], [3, 4], [5, 6]];

const novaListaNumeros = listaNumeros.flat();

console.log(novaListaNumeros);
console.log(listaNumeros);

// Utilizando o flaMap()
const listaNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novaListaNumeros2 = listaNumeros2.flatMap((item) => {
    return item, item  * 10 ;
});

console.log(novaListaNumeros2);