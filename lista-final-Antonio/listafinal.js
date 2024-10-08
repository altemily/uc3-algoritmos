
// QUESTÃO 1

let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Manga");
frutas.unshift("Uva");
frutas.splice(3,1);

console.log(frutas)


// QUESTÃO 2

let saudacao = "Olá,";
let nome = " Maria.";

let mensagem = saudacao.concat(nome)
console.log(mensagem)


// QUESTÃO 3

let numero = 10;
if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}


// QUESTÃO 4

let numeros = [5, 12, 8, 130, 44];
let filtrados = numeros.filter(num => num > 10);
console.log(filtrados);


// QUESTÃO 5

let valores = [10, 20, 30, 40];
let soma = valores.reduce((acc, val) => acc + val, 0);
console.log(soma);



// QUESTÃO 6

let texto = "javascript é legal"
let textoMaiusculo = texto.toUpperCase()
console.log(textoMaiusculo)


// QUESTÃO 7

let nome = "Carlos";
console.log(nome.includes("a"));


// QUESTÃO 8

let cores = ["Azul", "Verde", "Amarelo", "Roxo"];
cores.splice(1,2);
console.log(cores);


// QUESTÃO 9

let numeros = [10, 20, 30];
numeros.unshift(5);
numeros.push(40);
numeros.shift();
numeros.pop()

console.log(numeros)


// QUESTÃO 10

let frase = "Programação é divertida"
console.log(frase.length);


// QUESTÃO 11

let frase = "Aprender JavaScript é muito bom";
let palavras = frase.split(" ");
console.log(palavras);


// QUESTÃO 12

let texto = "Eu gosto de JavaScript";
let palavrasInvertidas = texto.split(" ").reverse().join(" ");
console.log(palavrasInvertidas);


// QUESTÃO 13

let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);


// QUESTÃO 14

let numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
let filtrados = numerosAleatorios.filter(num => num > 50);
console.log(filtrados);

// OU //

let numerosAleatorios = [];
let filtrados = [];

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100) + 1;
    numerosAleatorios.push(numero);
    if (numero > 50) {
        filtrados.push(numero);
    }
}

console.log(numerosAleatorios);
console.log(filtrados);



// QUESTÃO 15

let numerosAleatorios = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
let soma = numerosAleatorios.reduce((acc, val) => acc + val, 0);

console.log(soma, !isNaN(soma));


// QUESTÃO 16

let frase = "O clima está ensolarado";
let novaFrase = frase.replace("ensolarado" , "chuvoso");

console.log(novaFrase);


// QUESTÃO 17

let numeros = [40, 10, 30, 20, 50];
numeros.sort((a, b) => a - b);

console.log(numeros);


// QUESTÃO 18

let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
let media = notas.reduce((acc, val) => acc + val, 0) / notas.length;

console.log(media, media >= 7 ? "Aprovado" : "Reprovado");

// QUESTÃO 19

let numeroStr = "45.67";
let numero = parseFloat(numeroStr);

console.log(Math.floor(numero), Math.ceil(numero));


// QUESTÃO 20

let palavra = "programador";
let count = [...palavra].filter(char => char === 'a').length;
console.log(count);


// QUESTÃO 21






















