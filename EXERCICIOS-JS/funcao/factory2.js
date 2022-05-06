function criarProduto (nome, preco, desconto = 15) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Balde', 10));
console.log(criarProduto('Playstation 5', 5.000, 10))