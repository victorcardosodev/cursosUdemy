const nome = "Victor";
const concatenacao = "Olá. " + nome + "!";
//console.log(concatenacao);

const template = `\nOlá ${nome}!`
console.log(concatenacao, template);

//expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = txt => txt.toUpperCase();
console.log(`Opa ${up("cuidado")}`);
