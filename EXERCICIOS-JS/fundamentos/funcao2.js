//armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma (2, 3);


//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(7, 3));


//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(5, 4));


const imprimir = a => console.log(a);
imprimir("LEGAL!!!!!!");