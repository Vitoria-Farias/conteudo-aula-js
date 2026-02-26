// Exemplo de operador de atribuição

let x = 100;
x = x - 5;
//console.log(x);

x = x + 5;
//console.log(x);



// Exemplo de Aritmética em JavaScript

let soma = 5 + 5 + 4;
//console.log(soma);

//const primeiroNome = 'Vitoria';
//const ultimoNome = 'Farias';

let nomeCompleto = 'Vitoria' + " " + 'Farias';

//console.log(nomeCompleto);



//Exemplos de tipos em JavaScript
//string

let cor = 'Azul';
let Fruta = 'Uva';
console.log(cor);
console.log(Fruta);


//Number

let soma1 = 5 + 5;
let subtracao = 10 - 3;
console.log(soma1);
console.log(subtracao);


//BigInt

let bigInt = 1234567890123456789012345n;
let bigInt2 = BigInt(1234567890123456789012345);

console.log(bigInt);
console.log(bigInt2);


//Boolean

let valorVerdadeiro = true;
let valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);


//Object

const carro = {
    marca: 'Porsche',
    modelo: '911 Turbo S',
    cor: 'Ruby Star Neo',
}

console.log(carro);

console.log('A marca do carro é: ' + carro.marca);


//Array

const frutas = ['Uva', 'Abacaxi', 'Moranfo', 'Ameixa', 'Goiaba'];

console.log(frutas);


//Date Object

const data = new Date;

console.log(data);


//Undefined

let indefinido;

console.log(indefinido);


//Null

let nulo = null;

console.log(nulo);


//Symbol

let y = Symbol();

console.log(y);


//Exemplo de typeof

let stringTipo = "300";
let numberTipo = 300;

//const tipoDado = typeof stringTipo;
const tipoDado = typeof numberTipo;

console.log(tipoDado);


//Exemplos de Boolean

let cinco = 5;
let comparacao = cinco == 8;

console.log(comparacao);