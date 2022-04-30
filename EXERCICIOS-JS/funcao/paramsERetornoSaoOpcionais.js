const multa = 2500.00;

function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}M².`);
        console.log(`Por ultrapassar o limite terá que pagar uma multa de: R$${multa}!`);
    } else {
        return `Parabéns sua área é de: ${area}M² você está dentro do limite permitido`;
    }
}

console.log(area(2, 4));
console.log(area(5)); //retorna NaN
console.log(area()); //retorna NaN
console.log(area(5, 4, 9));
console.log(area(6, 7));