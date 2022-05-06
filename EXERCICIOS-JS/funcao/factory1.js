/* const produto1 = {
    nome: 'Balde',
    preco: 45
}

const produto2 = {
    nome: 'Bacia',
    preco: 31
} */

// Factory simples;
function criarPessoa() {
    return {
        nome: 'Fernanda',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());