// Utilização o BigInt
let a = BigInt("1616161616616161661616616616162323323233232323232323");
console.log(a);

//Utilizando n
let b = 1671661616617771728837278278232382373647547374353542237463546754637457343745374534554347n;
console.log(b);


// Utilizando operadores aritméticos com BigInt
let c = 3676374637457436743746n;
let d = 3676374637457436743746n;
let e = (c * d);
console.log(e);


// Convertendo BigInt
let f = BigInt("1661616161661666116166161661");
let fConvertido = Number(f);
console.log(fConvertido);


// Utilizando métodos de comparação em BigInt
let g = 100n;
let h = 90n;
let exComparacao = (g === h);
console.log(exComparacao);