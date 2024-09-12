// LISTA 2 - 08/08/2024


// QUESTÃO 1

function avaliarDesempenho(vendas, pontualidade) {
  if (vendas > 1000000 && pontualidade > 95) {
      return "Desempenho Excelente";
  } else if (vendas >= 50000 && vendas <= 1000000 && pontualidade >= 85 && pontualidade <= 95){
      return "Desempenho Bom";
  } else if (vendas < 50000 || pontualidade < 85){
      return "Desempenho Regular";
  }
}
console.log (avaliarDesempenho(100000, 95));


// QUESTÃO 2

function aprovarBolsa(mediaAcademica, renda){
  if(mediaAcademica > 8.5 && renda < 3000){
      return "Integral";
  } else if (mediaAcademica >= 7 && mediaAcademica <= 8.5 && renda >=3000 && renda <= 6000){
      return "Parcial";
  } else if (mediaAcademica < 7 || renda > 6000){
      return "Não aprovar bolsa";
  }    
}
console.log (aprovarBolsa(9, 2000));


// QUESTÃO 3

function avaliarRisco(imc, idade){
  if(imc>30 && idade > 60){
      return "Risco Alto";
  } else if (imc >= 25 && imc <= 30 && idade <= 45 && idade >= 60){
      return "Risco Médio";
  } else if (imc <= 25 && idade < 45){
      return "Risco Baixo";
  }
}
console.log (avaliarRisco(25, 30));


// QUESTÃO 4

function classificacaoDeCredito(rendaAnual, historico){
  if(rendaAnual >1000000 && historico === "Excelente"){
      return "Crédito Prime";
  }
   else if (rendaAnual >50000 && rendaAnual <= 1000000 && historico === "Bom"){
      return "Crédito Padrão";
  } 
  else if (rendaAnual < 50000 && historico === "Ruim"){
      return "Crédito Restrito";
  }
}

console.log (classificacaoDeCredito(1010000, "Excelente"));
console.log (classificacaoDeCredito(51000, "Bom"));
console.log (classificacaoDeCredito(10000, "Ruim"));


// QUESTÃO 5

function classificacaoDeProdutos(preco, demanda){

  if(preco >100 && demanda > 500){
      return "Produto Premium";
  }
  
  else if(preco > 50 && preco <= 100 && demanda > 200 && demanda <= 500){
      return "Produto Padrão"
  }

  else if(preco < 50 && demanda < 200){
      return "Produto Enconômico"
  }
}

console.log (classificacaoDeProdutos(101, 501));


// QUESTÃO 6

function selecaoCandidatos(experiencia, formacaoAcademica){

  if(experiencia > 10 && formacaoAcademica === "Doutorado"){
      return "Posição Sênior";
  }

  else if(experiencia > 5 && experiencia < 10 && formacaoAcademica === "Mestrato"){
      return "Posição Plena";
  }

  else if(experiencia < 5 && formacaoAcademica === "Graduação"){
      return "Posição Júnior";
  }
}

console.log (selecaoCandidatos(11, "Doutorado"))


// QUESTÃO 7

function avaliacaoFornecedores(qualidade, prazo){

  if (qualidade === "Excelente" && prazo < 5){
      return "Fornecedor A";
  }

  else if (qualidade === "Boa" && prazo > 5 && prazo < 10){
      return "Fornecedor B";
  }

  else if (qualidade === "Regular" && prazo > 10){
      return "Fornecedor C"
  }
}

console.log (avaliacaoFornecedores("Excelente", 4))


// QUESTÃO 8

function classificacaoProjetos (orcamento, complexidade){

  if (orcamento > 1000000 && complexidade === "Alta"){
      return "Projeto Estratégico";
  }

  else if (orcamento < 500000 && orcamento < 1000000 && complexidade === "Média"){
      return "Projeto Importante";
  }

  else if (orcamento < 500000 && complexidade === "Baixa"){
      return "Projeto Secundário";
  }
}

console.log (classificacaoProjetos(49000, "Baixa"))


// QUESTÃO 9

function avaliacaoCursos (avaliacaoAlunos, taxaConclusao){

  if (avaliacaoAlunos > 4.5 && taxaConclusao > 90){
      return "Curso Excelente";
  }

  else if (avaliacaoAlunos > 3.5 && avaliacaoAlunos <4.5 && taxaConclusao > 75 && taxaConclusao < 90){
      return "Curso Bom";
  }

  else if (avaliacaoAlunos < 3.5 && taxaConclusao < 75){
      return "Curso Regular";
  }
}

console.log (avaliacaoCursos(4.6, 91))


// QUESTÃO 10

function classificacaoFilme (avaliacaoUsuarios, visualizacoes){

  if (avaliacaoUsuarios > 4.5 && visualizacoes > 1000000){
      return "Filme Blockbuster";
  }

  else if (avaliacaoUsuarios > 3.5 && avaliacaoUsuarios < 4.5 && visualizacoes > 500000 && visualizacoes < 1000000){
      return "Filme Popular";
  }

  else if (avaliacaoUsuarios < 3.5 && visualizacoes < 500000){
      return "Filme Nicho";
  }
}

console.log (classificacaoFilme (5.0, 11000000))
