const status = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
const resultado = status;

console.log(resultado(7.1));
console.log(resultado(5));