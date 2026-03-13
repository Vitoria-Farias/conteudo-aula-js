// Primeiro array
//const frutas = ['Abacaxi', 'Morango', 'Melão', 'Uva'];

//console.log(frutas);


// Adicionando items ao array
const carros = [];

carros[0] = "Porsche";
carros[1] = "Ferrari";
carros[2] = "Fiat";


console.log(carros);


// Criando array com new Array()
const cores = new Array ("Azul", "Vermelho", "Cinza");

console.log(cores);

console.log(cores[0]);

// Alterando elemento de array
//const frutas = ['Abacaxi', 'Morango', 'Melão', 'Uva'];

//frutas[0] = "Maçã";

//console.log(frutas[0]);


//Convertendo Array em String
//let stringFrutas = frutas.toString();

//console.log(stringFrutas);
//console.log(typeof frutas);


// Exemplo de elementos de array
const pessoa = {
  primeiroNome: "Richard",
  ultimoNome: "Oliveira",
  idade: 19,
  pais: "Brasil",
}

function minhaFuncao() {
    return "Olá";
};

const meuArray = [];

meuArray[0] = 123;
meuArray[1] = pessoa;
meuArray[2] = minhaFuncao;

console.log(meuArray);


// Acessando a propriedade length
const frutas = ['Abacaxi', 'Morango', 'Melão', 'Uva'];

let fruta = frutas[frutas.length - 1];

console.log(fruta);


// Usando forEach em Array
const elemento = document.querySelector('.ex1');
const comida = ["Pizza", "Sushi", "Macarrão", "Salada", "Carne"];


// Adicionando item no Array
comida.push("Coxinha");
comida.push("Kibe");
comida.push("Doritos");

let texto = "<ul>";

comida.forEach(retornaItem);

texto = texto + "</ul>"

elemento.innerHTML = texto;

function retornaItem(item) {
   texto = texto + "<li>" + item + "</li>";
}







