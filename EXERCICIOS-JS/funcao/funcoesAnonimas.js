const soma = function (x, y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 5);
imprimirResultado(7, 9, soma);
imprimirResultado(8, 4, function (x, y) {
    return x - y;
});
imprimirResultado(2, 2, (x, y) => x * y);

const pessoa = {
    falar: function() {
        console.log('Olá');
    }
}

pessoa.falar();