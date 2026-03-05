// Exemplo de utilização do length em string
let texto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let tamanho = texto.length;

const elemento = document.querySelector('.ex1');

// elemento.innerHTML = `
//   <style>
//     .container {
//       display: flex;
//       gap: 30px;
//       background-color: orange;
//     }
    
//     .container div{
//       width: 100px;
//       height: 100px;
//       background-color: blanchedalmond;
//     }
//   </style>

//   <h1>ESSE É UM NOVO H1</h1>
//   <div class="container">
//     <div>Item 1</div>
//     <div>Item 2</div>
//     <div>Item 3</div>
//   </div>
// `;

// Exemplo de utilização do caractere de escape
let texto2 = 'Somente a dor \'coletiva\' gera a união. ';

let texto3 = "Somente a dor \"coletiva\"gera a união. ";

let texto4 = "Somente a dor \\coletiva gera a união. ";

let texto5 = `Somente a dor \\ coletiva gera a união. `;

//console.log(texto2);
//console.log(texto3);
//console.log(texto4);
//console.log(texto5);

//Exemplo de template string
let nome = "Vitoria Farias";
let idade = 18;
let frase = `Meu nome é ${nome} e tenho ${idade} anos. `;

let frase2 = "Meu nome é " + nome + " e tenho " + idade + " anos.";

//console.log(frase2);

//Exemplo de adição em HTML com template string em JS
const elemento2 = document.querySelector('.ex2');


elemento2.innerHTML = `
   <style>
    .container {
       gap: 20px;
       display: flex;
       justify-content: center;
       background-color: blue;
    }

    .container div{
       text-align: center;
       align-content: center;
       color: white;
       width: 100px;
       height: 100px;
       background-color: gray;
     
    }
   
   </style>

   <div class="container">
     <div>Item 1</div>
     <div>Item 2</div>
     <div>Item 3</div>
   </div>
`;