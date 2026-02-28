//Exemplo de Condição Lógica: If e Else
let x = 8;

if (x == 5) {
    //console.log('A variável x é igual a 5!');
} else {
    //console.log('A variável x não é igual a 5!');
}

//Exemplo de Condição Lógica: If Else If
let y = 2;

if (y > 3) {
    console.log('A variável y é maior que 3!');
} else if (y == 3) {
    console.log('A variável y é igual a 3');
} else {
    //console.log('A variável y possui um valor diferente das verificações.');
}

//Exemplo e if
const elemento = document.getElementById('ex1');
//console.log(elemento);
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);

//console.log(hora);

if (pegarHoras > 18) {
    elemento.innerHTML = "Boa Noite!";
    elemento.style.color = "Blue";
}

//Exemplo if 2
let idade = 18;
let texto = 'Você é novo demais para dirigir!';

if (idade >= 18) {
    texto = 'Você tem idade para dirigir!';
    
}
document.getElementById('idade').innerHTML = 'Sua idade é: ' + idade;

document.getElementById('ex2').innerHTML = texto;


// Exemplo If Animado
let idade2 = 18;
let pais = 'Estados Unidos';
let mensagem = 'Você não pode dirigir!';

//if(pais == 'Brasil') {
    //let mensagem = 'Você pode dirigir!';
    //console.log('O pais definido é: Brasil');

//    if(idade2 >= 16) {
//       mensagem = 'Você pode dirigir!';
//   }
//}
//document.getElementById('ex3').innerHTML = mensagem;


// Exemplo de If aninhado com operador AND (&&)
let idade3 = 16;
let pais2 = 'Estados Unidos';
let mensagem2 = 'Você não pode dirigir';

if ((pais2 == 'Estados Unidos') && (idade3 == 15)) {
    mensagem2 = 'Você pode dirigir!';
}

document.getElementById('ex3').innerHTML = mensagem2;