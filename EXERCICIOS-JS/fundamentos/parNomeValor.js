// par nome/valor
const saudacao = 'opa'; // contexto léixco 1;

function exec() {
    const saudacao = 'Falaaa'; // contexto léxico 2;
    return saudacao;
}


//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Avenida Fernando",
        numero: 122
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);