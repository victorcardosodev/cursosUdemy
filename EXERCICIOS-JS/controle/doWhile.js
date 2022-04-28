function getNumeroAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let num // no "do/while" não é necessário atribuir valor inicial;

do {
    num = getNumeroAleatorio(-1, 10);;
    console.log(`A opção escolhida foi ${num}.`);
} while (num != -1);

console.log('Fim');