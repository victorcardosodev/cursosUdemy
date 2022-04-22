function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({ max: 50, min: 35}));
console.log(rand({ min: 800}));
console.log(rand({}));
console.log(rand()); //vai gerando erro porque o "rand" não consegue desestruturar algo undefined ou nulo