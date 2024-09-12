//  LISTA 3 


// QUESTÃO 1

function verificarIdade(listaDeIdades) {
  for (let i =0; i < listaDeIdades.length; i++){
     if (listaDeIdades[i] < 18){
          return "Alguém não pode entar";
       }
   }
   return "Todos podem entrar";
}

const idades = [19, 22, 19, 20];
console.log(verificarIdade(idades));


// QUESTÃO 2

function par(){
   let a = 0
  let n = 1

   while (n <= 50){
      if (n % 2 === 0){
           a++
       }
       n++
   }
return a
}
console.log(par());


// QUESTÃO 3

function classificarCor(n) {
   let classificar;

   switch (n){
       case 1:
           classificar = "Cor Clara";
          break;
       case 2:
           classificar = "Cor Média";
           break;
       case 3: classificar = "Cor Escura";
           break;
       default:
          classificar = 'Cor Desconhecida';

}
return classificar
}

console.log (classificarCor(3));



// QUESTÃO 4

function validarSenha(senha) {
   const comprimento = senha.length;
   switch (true) {
       case (comprimento < 8):
           return "Senha Fraca";
       case (comprimento >= 8 && comprimento <= 12):
           return "Senha Média";
       case (comprimento > 12):
           return "Senha Forte";
   }
}

console.log(validarSenha("abc123"));


// QUESTÃO 5

function classificarNota(nota) {
   let classificacao;

   switch (true) {
       case (nota >= 90):
          classificacao = "A";
       break;
       case (nota >= 80 && nota < 90):
           classificacao = "B";
       break;
       case (nota >= 70 && nota < 80):
           classificacao = "C";
       break;
       case (nota >= 60 && nota < 70):
           classificacao = "D";
       break;
       case (nota < 60):
           classificacao = "F";
       break;
       default:
           classificacao = "Nota inválida";
  
   }

   return classificacao;

}

console.log(classificarNota(92))



//  QUESTÃO 6


// function fizzbuzzAvancado(){

//   for (let numero = 1; numero <= 100; numero ++){
  
//        if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0){
//            console.log("FizzBuzzBoom");
//        } else if (numero % 2 === 0 && numero % 3 === 0){
//            console.log ("FizBuzz");
//        } else if (numero % 3 === 0 && numero % 5 === 0){
//            console.log ("BuzzBoom");
//        } else if (numero % 2 === 0 && numero % 5 === 0){
//            console.log ("FizzBoom");
//        } else if (numero % 2 === 0);{
//            console.log ("Fizz");
//        } else if (numero % 3 === 0){
//            console.log ("Buzz");
//        } else if (numero % 5 === 0){
//            console.log ("Boom");
//        } else{
//            console.log(numero);
//        }
//    }
//    }
  



 