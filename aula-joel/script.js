function livrosComEstoqueSuficiente(livros) {
    let livrosEstoque = [];

    livros.forEach(livro => {
        if (livro.quantidade > 10) {
                livrosEstoque.push(livro.titulo);
        }
    });

    return livrosEstoque;
}


const biblioteca = [
    { titulo: 'O Senhor dos Anéis: A sociedade do anel', quantidade: 12},
    { titulo: 'O Senhor dos Anéis: As duas torres', quantidade: 8 },
    { titulo: 'O Senhor dos Anéis: O retorno do rei', quantidade: 10 },
    { titulo: 'Capitão América - Gerra Civil', quantidade: 5 }
];

const livrosEstoque = livrosComEstoqueSuficiente(biblioteca);
console.log(livrosEstoque); 




// CORREÇÃO DO PROFESSOR

let livros = [
    { titulo: 'O Senhor dos Anéis: A sociedade do anel', 'quantidade': 12},
    { titulo: 'O Senhor dos Anéis: As duas torres', 'quantidade': 8 },
    { titulo: 'O Senhor dos Anéis: O retorno do rei', 'quantidade': 14 },
    { titulo: 'Capitão América - Gerra Civil', 'quantidade': 5 }
    ]

    function livrosComEstoqueSuficiente(livros) {
        let resultado = [];
            for(let i=0; i<livros.lenght; i++){
                if(livros[i].quantidade >=10){
                    resultado.push(livros[i])
                }
            }
        if(resultado.lenght > 0)
  return resultado;
    }


console.log(livrosComEstoqueSuficiente(livros))















