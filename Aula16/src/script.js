// Utilizando atributo
const elemento = document.querySelector(".ex1");

elemento.src = "img2.jpg";
elemento.width = 400;


// Conteúdo dinamico (data)
const elemento2 = document.querySelector("#ex2");

elemento2.innerHTML = "Data atual: " + Date();