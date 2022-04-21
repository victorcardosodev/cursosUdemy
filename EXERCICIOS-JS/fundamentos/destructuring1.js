// recurso incluido no ES2015;

const pessoa = {
    nome: 'Ana',
    idade: '17',
    endereco: {
        logradouro: 'avenida tal',
        numero: 1234
    },
    signo: 'peixes'
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

let logradouro = pessoa.endereco.logradouro;
console.log (logradouro);

let number = pessoa.endereco.numero;
console.log(number);

const { endereco: {logradouro: log, numero: num } } = pessoa;
console.log(log, num); // Forma de desestriturar um dado aninhado com destructuring

const { sobrenome, bemHumorada = true } = pessoa;
console.log (sobrenome, bemHumorada);