//Desafio para fazer a troca de valores das variaveis;

let a = 7;
let b = 94;

c = a;

a = b;

b = c;

console.log ("valor de a: " + a);
console.log ("Valor de b: " + b);

// outra forma de fazer a troca de variveis;

let d = 10
let e = 50;

[d, e] = [e, d];

console.log ("Variavel d: " + d);
console.log ("Variavel e: " + e);
