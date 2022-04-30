// Função em JS é Fisrt-Class Object(citizens);
// Higher order function;

//criar de forma literal;
function fun1 () { }

//armazenar em uma variavel;
const fun2 = function () { }
console.log(fun2());

// Armazenar em um array;
const array = [function (a, b) { return a + b}, fun1, fun2];
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto;
const obj = {}
obj.falar = function () { return 'Opa'};
console.log(obj.falar());

// Passar função como param
function run (fun) {
    fun();
}

run(function () {
    console.log('Executando...');
});

// Uma função pode retornar/conter uma função;
function soma(a, b) {
    return function (c) {
        console.log(a + b +c);
    }
}

soma(2, 3)(4);
const firstSoma = soma(8, 2);
firstSoma(10);