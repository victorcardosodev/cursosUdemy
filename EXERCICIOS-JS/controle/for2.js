const notas = [9, 7, 6.5, 2, 8.9];

for (let a in notas) {
    console.log(a, notas[a]);
}

const pessoa = {
    Nome: 'Ana',
    sobrenome: 'Fernanda',
    idade: 33,
    peso: 65
}

for (let info in pessoa) {
    console.log(`${info}: ${pessoa[info]}`);
}