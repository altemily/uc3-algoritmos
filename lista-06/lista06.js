// QUESTAO 1

let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
frutas.shift();

function verificarFruta(nomeFruta) {
    if (frutas.includes(nomeFruta)) {
        return "Fruta encontrada";
    } else {
        return "Fruta não encontrada";
    }
}

console.log(verificarFruta("banana")); 


// QUESTAO 2

function calcular(a, b, operacao) {
  if (operacao === "soma") {
      return a + b;
  } else if (operacao === "subtracao") {
      return a - b;
  } else if (operacao === "multiplicacao") {
      return a * b;
  } else if (operacao === "divisao") {
      return a / b;
  } else {
      return "Operação inválida";
  }
}

console.log(calcular(10, 2, "soma")); 
console.log(calcular(10, 2, "divisao"));


// QUESTAO 3

let numeros = [1, 2, 3, 4, 5];
let numerosAumentados = [];
for (let i = 0; i < numeros.length; i++) {
    numerosAumentados.push(numeros[i] + 5);
}

console.log(numerosAumentados); // Saída: [6, 7, 8, 9, 10]


// QUESTAO 4

function classificarNota(nota) {
  switch (true) {
      case (nota >= 7):
          return "Aprovado";
      case (nota < 7):
          return "Reprovado";
  }
}

console.log(classificarNota(8)); 
console.log(classificarNota(5)); 


// QUESTAO 5

let numeros = [5, 10, 15, 20];

function verificarNumero(numero) {
    if (numero < 10) {
        return "Menor que 10";
    } else if (numero >= 10 && numero <= 20) {
        return "Entre 10 e 20";
    } else {
        return "Maior que 20";
    }
}


for (let i = 0; i < numeros.length; i++) {
    console.log(verificarNumero(numeros[i]));
}


// QUESTAO 6

let idade = 20; 

if (idade >= 18 && idade < 65) {
    console.log("Adulto");
} else {
    console.log("Não adulto");
}

const resultado = (idade >= 18 && idade < 65) ? "Adulto" : "Não adulto";
console.log(resultado);


// QUESTAO 7

function fizzBuzz(n) {
  let resultado = [];
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          resultado.push("FizzBuzz");
      } else if (i % 3 === 0) {
          resultado.push("Fizz");
      } else if (i % 5 === 0) {
          resultado.push("Buzz");
      } else {
          resultado.push(i);
      }
  }
  return resultado;
}

console.log(fizzBuzz(15));



// QUESTAO 8 

let tarefas = ["estudar", "limpar", "comprar"];

tarefas.splice(1, 0, "exercitar"); 
tarefas.splice(3, 1); 

console.log(tarefas.length); 
console.log(tarefas); 


// QUESTAO 9

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

console.log(calcularMedia(7, 9)); 


// QUESTAO 10

let valores = [5, 10, 15, 20];
let valoresDivididos = [];
let i = 0;

while (i < valores.length) {
    valoresDivididos.push(valores[i] / 2);
    i++;
}

console.log(valoresDivididos);


// QUESTAO 11

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

function compararSoma(a, b) {
    const soma = a + b;
    return soma > 20 ? "A soma é maior que 20" : "A soma não é maior que 20";
}

alert(compararSoma(num1, num2));


// QUESTAO 12

let limite = parseInt(prompt("Digite um número:"));

let numeros = [];
for (let i = 1; i <= limite; i++) {
    numeros.push(i);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0) {
        alert(numeros[i] + " é múltiplo de 3");
    }
}


// QUESTAO 13

let limite = parseInt(prompt("Digite um número:"));

let numeros = [];
for (let i = 1; i <= limite; i++) {
    numeros.push(i);
    alert("Número: " + i + ", Quadrado: " + (i * i));
}


// QUESTAO 14

function verificarValor(numero) {
  if (numero > 0) {
      return "Positivo";
  } else if (numero < 0) {
      return "Negativo";
  } else {
      return "Zero";
  }
}

let valor = parseFloat(prompt("Digite um número:"));
alert(verificarValor(valor));


// QUESTAO 15 

let limite = parseInt(prompt("Digite um número:"));

let numeros = [];
for (let i = 1; i <= limite; i++) {
    numeros.push(i);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        alert(numeros[i] + " é par");
    } else {
        alert(numeros[i] + " é ímpar");
    }
}



// QUESTAO 16

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (soma, subtracao, multiplicacao, divisao):");

function operacaoMatematica(a, b, operacao) {
    switch (operacao) {
        case "soma":
            return a + b;
        case "subtracao":
            return a - b;
        case "multiplicacao":
            return a * b;
        case "divisao":
            return a / b;
        default:
            return "Operação inválida";
    }
}

alert(operacaoMatematica(num1, num2, operacao));


// QUESTAO 17

let numero = parseInt(prompt("Digite um número:"));

function verificarParidade(num) {
    return (num % 2 === 0) ? "Par" : "Ímpar";
}

alert(verificarParidade(numero));


// QUESTAO 18

let limite = parseInt(prompt("Digite um número:"));
let numeros = [];
for (let i = 1; i <= limite; i++) {
    numeros.push(i);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        alert(numeros[i] + " é maior que 10");
    }
}



