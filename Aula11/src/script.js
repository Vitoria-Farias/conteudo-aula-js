// Utilizando o operador in
const pessoa = {
   primeiroNome: "Vitoria",
   ultimoNome: "Dutra",
   idade: 19,
   pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);


// Criação de objetos aninhados

const pessoa2 = {
    primeiroNome: "Morais",
    segundoNome: "Miranha",
    carros: {
       carro1: "Porsche", 
       carro2: "Empala 67", 
       carro3: "BMW", 
    },
    motos: {
        moto1: "Ducati",
        moto2: "Royal Enfield",
    },
}

let propriedadesMoto = "moto1";

console.log(pessoa2.carros.carro2);
console.log(pessoa2.carros["carro3"]);
console.log(pessoa2["carros"]["carro1"]);

console.log(pessoa2.motos[propriedadesMoto]);
