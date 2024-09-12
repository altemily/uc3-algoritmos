// QUESTÃO 1

// let frutas = ['maça','banana','laranja']
// frutas.unshift('abacaxi')
// frutas.push('manga')
// frutas.shift()
// frutas.pop()
// console.log(frutas)

// QUESTÃO 2

// let numeros = [10,20,30,40,50]
// numeros.splice(2,0,25)
// numeros.splice(4, 1)
// console.log(numeros)


// QUESTÃO 3

// let cores = ['vemelho','azul', 'verde','amarelo','azul']
// console.log(cores.indexOf('azul'))
// console.log(cores.lastIndexOf('azul'))
// console.log(cores.includes('roxo'))
// *** Correção
// let cores = ['vemelho','azul', 'verde','amarelo','azul']
// let primeiraPosicao = (cores.indexOf('azul'))
// let ultimaPosicao = (cores.lastIndexOf('azul'))
// let contemRoxo = (cores.includes('roxo'))
// console.log(cores)
    

// QUESTÃO 4

// let alunos = ['João','Ana','Carlos','Bia']
// const meio = alunos.splice(alunos.indexOf('Carlos'),1)
// console.log(meio)
// console.log(alunos)
// alunos.push('Maria')
// console.log(alunos)
// alunos.unshift('Pedro')
// console.log(alunos)


// QUESTÃO 5

// let animais = ['gato','cachorro','pássaro','peixe','gato']
// animais.shift('gato')
// console.log(animais)
// animais.push('hamster')
// animais.splice(animais.indexOf('pássaro'),0)
// console.log(animais)
// console.log(animais.includes('gato'))


// QUESTÃO 6 **Corrigir**

// let livros = ['O Senhor dos Anéis', '1994', 'O Pequeno Príncipe', 'Harry Potter']
// console.log(livros.indexOf('1994'))
// livros.splice(livros.indexOf('O Pequeno Príncipe'),0)
// console.log(livros)
// *** Correção


// QUESTÃO 7

// let cidades = ['São Paulo','Rio de Janeiro', 'Salvador','Brasília']
// console.log(cidades.includes('Salvador'))
// cidades.unshift('Curitiba')
// console.log(cidades)


// QUESTÃO 8 - Corrigir

// let jogos = ['FIFA','Minecraft','Fortnite','Among Us']
// jogos.splice(jogos.indexOf('Minecraft'), 1, 'The sims')
// jogos.shift()
// console.log(jogos)


// QUESTÃO 9

// let esportes = ['futebol', 'basquete', 'vôlei', 'tênis']
// esportes.shift()
// let contemVolei = esportes.includes('vôlei');
// if (contemVolei){
//     esportes.splice(1, 1)
// }
// console.log(esportes)

// QUESTÃO 10

// let tecnologias = ['HTML', 'CSS', 'JavaScript', 'React']
// tecnologias.pop()
// console.log(tecnologias)
// tecnologias.unshift('Node.js')
// console.log(tecnologias)
// tecnologias.indexOf('JavaScript')
// console.log(tecnologias)


// QUESTÃO 11

// let filmes = ['Matrix', 'Inception', 'Avatar'];
// filmes.unshift('Interstellar')
// filmes.pop('Avatar')
// filmes.push('The Godfather')
// console.log(filmes)


// QUESTÃO 12

// let cores = ['vermelho', 'azul', 'verde', 'amarelo']
// cores.splice(2,1,'roxo')
// console.log(cores)


// QUESTÃO 13

// let times = ['Flamengo', 'Corinthians', 'Palmeiras']
// times.includes('São Paulo')
// times.push('São Paulo')
// console.log(times)


// QUESTÃO 14

// let comidas = ['pizza', 'hamburguer', 'sushi', 'lasanha']
// console.log(comidas.indexOf('sushi'))
// comidas.splice(2,2,'lasanha')
// console.log(comidas)


// QUESTÃO 15

// let numeros = [5, 10, 15, 20]
// numeros.push(25)
// numeros.splice(0,2)
// numeros.unshift(7)
// console.log(numeros)


// QUESTÃO 16

// let planetas = ['Terra', 'Marte', 'Júpiter', 'Saturno']
// planetas.shift('Terra')
// planetas.unshift('Vênus')
// console.log(planetas)


// QUESTÃO 17 - Corrigir

// let cursos = ['Matemática', 'Física', 'Química', 'Biologia']
// cursos.includes('Física')
// cursos.splice(2,2)
// console.log(cursos)


// QUESTÃO 18 - Corrigir

// let carros = ['Ferrari', 'Lamborghini', 'Porsche', 'Bugatti']
// carros.pop()
// console.log(carros)


// QUESTÃO 19

// let idiomas = ['Inglês', 'Espanhol', 'Francês', 'Alemão']
// idiomas.shift()
// idiomas.push('Italiano')
// idiomas.indexOf('Francês')
// console.log(idiomas)


// QUESTÃO 20

// let frutas = ['maçã', 'banana', 'laranja', 'uva']
// frutas.unshift('morango')
// console.log(frutas)
// frutas.includes('laranja')
// console.log(frutas)
