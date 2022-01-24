const a = {nome: "teste"};
console.log(a);

let b = a;
console.log(b);

b.nome = "TESTE B";
console.log(b);
console.log(a); //atribuição de objeto por referencia faz com que as duas variaveis mudem msm que uma delas seja constante (não pode ser alterada diretamente);

let valor;
console.log(valor);

valor = null;
console.log(valor);

const produto = {};
produto.preco = 5.50;
console.log(produto);
console.log(!!produto.preco);

produto.preco = null;
console.log(!!produto.preco);

delete produto.preco;
console.log(produto);