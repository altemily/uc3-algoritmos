
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

let str1 = "casa";
let str2 = "CASA";
console.log(str1.toLowerCase() === str2.toLowerCase()); 

// QUESTÃO 22

let numeros = [15, 20, 25, 30];
console.log(numeros.every(num => num > 10)); 


// QUESTÃO 23

let numeros = [5, 8, 12, 3];
console.log(numeros.some(num => num < 5)); 


// QUESTÃO 24

let frase = " JavaScript é divertido! ";
console.log(frase.trim());


// QUESTÃO 25

let numero = 7;
if (numero > 10) {
    console.log("Maior que 10");
} else {
    console.log("Menor ou igual a 10");
}


// QUESTÃO 26

let palavras = ["Eu", "amo", "JavaScript"];
console.log(palavras.join(" ")); 


// QUESTÃO 27

let palavra = "JavaScript";
console.log(palavra.split(""));


// QUESTÃO 28

let numero = 25;
if (numero >= 10 && numero <= 50) {
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");
}


// QUESTÃO 29

let numeros = [2, 4, 6];
let multiplicados = numeros.map(num => num * 3);
console.log(multiplicados); 


// QUESTÃO 30

let str1 = "João";
let str2 = "joão";
console.log(str1.toLowerCase() === str2.toLowerCase()); 


// QUESTÃO 31

let nomes = ["Pedro", "Maria", "José"];
nomes.unshift("Ana");
console.log(nomes); 


// QUESTÃO 32

let cidades = ["Natal", "Recife", "Fortaleza"];
cidades.pop();
console.log(cidades);


// QUESTÃO 33

let numero = -8;
if (numero >= 0) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}

// QUESTÃO 34

let nome = "JavaScript";
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// QUESTÃO 35

let numeros = [2, 4, 6, 8];
let multiplicados = numeros.map(num => num * 2);
console.log(multiplicados);

// QUESTÃO 36

let texto = "JavaScript é divertido";
let textoSemEspacos = texto.split(" ").join("");
console.log(textoSemEspacos); 


// QUESTÃO 37

let numero = 16;
console.log(Math.sqrt(numero));


// QUESTÃO 38

let itens = [];
console.log(itens.length === 0);


// QUESTÃO 39

let numero = 5;
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log(fatorial);


// QUESTÃO 40

let valores = [1, 2, 3, 4, 5];
let multiplicados = valores.map(num => num * 2);
let soma = multiplicados.reduce((acc, val) => acc + val, 0);
console.log(soma); 


// QUESTÃO 41

let texto = "JavaScript";
console.log(texto.split(""));

// QUESTÃO 42

let parte1 = "Olá, ";
let parte2 = "mundo!";
let frase = parte1.concat(parte2);
console.log(frase); 


// QUESTÃO 43

let numeroStr = "25";
console.log(parseInt(numeroStr));


// QUESTÃO 44

let cores = ["Vermelho", "Verde", "Azul"];
let coresFiltradas = cores.filter(cor => cor !== "Verde");
console.log(coresFiltradas);


// QUESTÃO 45

let palavra = "JavaScript";
console.log(palavra.length);

// QUESTÃO 46

let a = 5;
let b = 7;
let resultado = a * b;
if (resultado > 30) {
    console.log("Maior que 30");
} else {
    console.log("Menor ou igual a 30");
}


// QUESTÃO 47

let palavra = "JavaScript";
let invertida = palavra.split("").reverse().join("");
console.log(invertida); 


// QUESTÃO 48

let cidades = ["Natal", "Recife", "Fortaleza"];
cidades.shift();
console.log(cidades);


// QUESTÃO 49

let numero = 9;
if (numero % 2 !== 0) {
    console.log("Ímpar");
} else {
    console.log("Par");
}


// QUESTÃO 50

let numeros = [1, 2, 3, 4, 5];
let multiplicados = numeros.map(num => num * 10);
console.log(multiplicados); 




















