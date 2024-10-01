// QUESTÃO 1

let numeros = [34, 7, 23, 32, 5, 62];
numeros.push (9,12);
numeros.unshift (1);
numeros.sort ((a,b) => a - b);
numeros.reverse ();
console.log("Array resultante:" ,numeros);


// QUESTÃO 

let saudacao = "Olá";
let nome = "Mundo";
let mensagem = saudacao.concat(nome);
let mensagemMaiuscula = mensagem.toUpperCase();
let palavraExtraida = mensagemMaiuscula.substring(mensagemMaiuscula.indexOf("MUNDO"), mensagemMaiuscula.indexOf("MUNDO") + "MUNDO".length);

console.log(palavraExtraida);



// QUESTÃO 3

let valores = [10, 25, 30, 45, 50, 60];
let filtrados = valores.filter(valor => valor > 30);
let soma = 0;
for (let i = 0; i < filtrados.length; i++) {
    soma += filtrados[i];
}
let isNumero = !isNaN(soma);

console.log("Valores filtrados:", filtrados);
console.log("Soma dos valores filtrados:", soma);
console.log("A soma é um número?", isNumero);


// QUESTÃO 4

let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(function(numero) {
    return numero * 2;
})

 console.log(dobrados);

let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
}, 0);

console.log(soma);



// QUESTÃO 5

let frase = "A programação é divertida e desafiadora.";

let quantidadeLetras = frase.length;
let palavras = frase.split(" ");
let palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase());
let novaFrase = palavrasMaiusculas.join("-");


console.log(quantidadeLetras);
console.log(novaFrase);


// QUESTÃO 6 

let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
frutas.splice(2, 1, "Abacaxi"); 

let primeirasFrutas = frutas.slice(0, 3);
primeirasFrutas.push("Melancia");

console.log(frutas);
console.log(primeirasFrutas);


// QUESTÃO 7

let nomes = ["Ana", "Carlos", "João", "Maria"];

let indiceCarlos = nomes.indexOf("Carlos");

let indiceJoao = nomes.indexOf("João");
nomes.splice(indiceJoao, 1, "José");

nomes.unshift("Fernanda");
nomes.push("Rafael");

console.log(indiceCarlos);
console.log(nomes);


// QUESTÃO 8

let precos = [15.5, 10.0, 20.75, 30.0, 8.0];
let precosAumentados = precos.map(preco => preco * 1.10);
let precosFiltrados = precosAumentados.filter(preco => preco > 20);
let totalFiltrado = precosFiltrados.reduce((acc, preco) => acc + preco, 0);

console.log(precosAumentados);
console.log(precosFiltrados);
console.log(totalFiltrado);


// QUESTÃO 9

let numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
let numerosFiltrados = numerosAleatorios.filter(num => num > 50);
let numerosOrdenados = numerosFiltrados.sort((a, b) => b - a);

console.log(numerosAleatorios);
console.log(numerosFiltrados);
console.log(numerosOrdenados);


// QUESTÃO 10

let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log("Média:", media.toFixed(2));
console.log("Resultado:", resultado);


// QUESTÃO 11

let cidade = "São Paulo";
let clima = "ensolarado";

let frase = `Hoje em ${cidade} está ${clima}.`;

let fraseModificada = frase.replace("ensolarado", "chuvoso");

console.log("Frase original:", frase);
console.log("Frase modificada:", fraseModificada);


// QUESTÃO 12

let texto = "javascript é incrível";
let palavras = texto.split(" ");
let palavrasInvertidas = palavras.reverse();

let resultado = palavrasInvertidas.map(palavra =>
  palavra.charAt(0).toUpperCase() + palavra.slice(1)
).join(" ");

console.log("Texto resultante:", resultado);


// QUESTÃO 13

let mes = 6;
let nomeMes;

switch (mes) {
    case 1: nomeMes = "Janeiro"; 
        break;
    case 2: nomeMes = "Fevereiro";
        break;
    case 3: nomeMes = "Março"; 
        break;
    case 4: nomeMes = "Abril"; 
        break;
    case 5: nomeMes = "Maio"; 
        break;
    case 6: nomeMes = "Junho"; 
        break;
    case 7: nomeMes = "Julho"; 
        break;
    case 8: nomeMes = "Agosto"; 
        break;
    case 9: nomeMes = "Setembro";
        break;
    case 10: nomeMes = "Outubro"; 
        break;
    case 11: nomeMes = "Novembro"; 
        break;
    case 12: nomeMes = "Dezembro"; 
        break;
}

let semestre = mes <= 6 ? "primeiro semestre" : "segundo semestre";

console.log("Mês:", nomeMes);
console.log("Semestre:", semestre);


// QUESTÃO 14

let numeroStr = "45.67";
let numeroInt = parseInt(numeroStr);
let arredondadoBaixo = Math.floor(numeroInt);

let arredondadoCima = Math.ceil(numeroInt);

console.log("Número inteiro:", numeroInt);
console.log("Arredondado para baixo:", arredondadoBaixo);
console.log("Arredondado para cima:", arredondadoCima);


// QUESTÃO 15

let palavra = "programador";
let terceiroCaractere = palavra.charAt(2); 
let posicaoA = palavra.indexOf("a");

let metadePalavra = palavra.slice(0, Math.ceil(palavra.length / 2));

console.log("Terceiro caractere:", terceiroCaractere);
console.log("Posição do caractere 'a':", posicaoA);
console.log("Primeira metade da palavra:", metadePalavra);


// QUESTÃO 16

let frase = "Estudar programação é ótimo!";
let contagemA = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a') {
        contagemA++;
    }
}

console.log("Quantidade de caracteres 'a':", contagemA);


// QUESTÃO 17

let letras = ["a", "b", "c", "d", "e"];
let letrasInvertidas = letras.reverse();

let letrasString = letrasInvertidas.join(", ");

console.log("Array invertido:", letrasInvertidas);
console.log("String resultante:", letrasString);


// QUESTÃO 18

let numeros = [5, 12, 8, 130, 44];
let numerosFiltrados = numeros.filter(num => num > 10);
let somaTotal = numeros.reduce((acc, num) => acc + num, 0);

let tamanhoCorreto = numeros.length === 5;

console.log("Array filtrado:", numerosFiltrados);
console.log("Soma total:", somaTotal);
console.log("Array possui exatamente 5 elementos:", tamanhoCorreto);


// QUESTÃO 19

let nome = "Alice";
let nomeMinusculo = nome.toLowerCase();

if (nomeMinusculo === "alice") {
    console.log("Nome reconhecido");
} else {
    console.log("Nome não reconhecido");
}

// QUESTÃO 20

let numeros = [];

for (let i = 0; i < 5; i++) {
    let numeroAleatorio = Math.round(Math.random() * 19) + 1; 
    numeros.push(numeroAleatorio);
}

console.log(numeros);


// QUESTÃO 21

let frase = "Aprender JavaScript é divertido e recompensador";
let palavras = frase.split(" ");

let numeroDePalavras = palavras.length;

let maisDeCincoPalavras = numeroDePalavras > 5;

console.log(palavras);
console.log(numeroDePalavras);
console.log(maisDeCincoPalavras);


// QUESTÃO 22

let nomeUsuario = prompt("Qual é o seu nome?");
let nomeCorreto = confirm(`O seu nome é ${nomeUsuario}?`);


if (nomeCorreto) {
    alert(`Olá, ${nomeUsuario}! Bem-vindo!`);
} else {
    alert("Nome não reconhecido.");
}


// QUESTÃO 23

let texto = "JavaScript";
let contagemA = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a') {
        contagemA++;
    }
}

console.log("Quantidade de caracteres 'a':", contagemA);


// QUESTÃO 24

let cores = ["Vermelho", "Verde", "Azul"];
cores.push("Amarelo");
cores.splice(cores.indexOf("Verde"), 1);
cores.unshift("Roxo");

console.log("Array final:", cores);


// QUESTÃO 25

let str1 = "casa";
let str2 = "CASA";

let saoIguaisMinusculas = str1.toLowerCase() === str2.toLowerCase();

let saoIguaisMaiusculas = str1.toUpperCase() === str2.toUpperCase();

console.log("Iguais em minúsculas:", saoIguaisMinusculas);
console.log("Iguais em maiúsculas:", saoIguaisMaiusculas);


// QUESTÃO 26

let numerosAleatorios = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);
let numerosCrescentes = [...numerosAleatorios].sort((a, b) => a - b);
let numerosDecrescentes = [...numerosAleatorios].sort((a, b) => b - a);

console.log("Números originais:", numerosAleatorios);
console.log("Números em ordem crescente:", numerosCrescentes);
console.log("Números em ordem decrescente:", numerosDecrescentes);


// QUESTÃO 27

let carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Ford", modelo: "Fiesta", ano: 2018 },
    { marca: "Toyota", modelo: "Hilux", ano: 2021 },
    { marca: "Honda", modelo: "Civic", ano: 2019 }
];

let carrosToyota = carros.filter(car => car.marca === "Toyota");

let modelosToyota = carrosToyota.map(car => car.modelo);

console.log("Carros da marca Toyota:", carrosToyota);
console.log("Modelos da marca Toyota:", modelosToyota);


// QUESTÃO 28

let animais = ["Cachorro", "Gato", "Leão", "Tigre"];
animais.splice(animais.indexOf("Leão"), 1, "Panda");

animais.splice(animais.indexOf("Gato") + 1, 0, "Coelho");

console.log("Array final:", animais);


// QUESTÃO 29

let numeros = [10, 5, 15, 7, 20];

numeros.sort((a, b) => a - b);
numeros.unshift(25);

let tamanhoCorreto = numeros.length === 6;

console.log("Array ordenado:", numeros);
console.log("Array possui exatamente 6 elementos:", tamanhoCorreto);


// QUESTÃO 30

let part1 = "Aprender";
let part2 = "Programação";
let fraseCompleta = part1.concat(" ", part2);
let fraseInvertida = fraseCompleta.split("").reverse().join("");
let resultadoFinal = fraseInvertida.split("").join(".");

console.log("Resultado final:", resultadoFinal);
































