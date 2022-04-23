function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; //operador lógico pra mostrar que é uma operação do tipo "ou/or"
    const commprarTv50 = trabalho1 && trabalho2; //operador lógico que mostra a operação do tipo "and/E"
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); //bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; //operador unário

    return {comprarSorvete, comprarTv32, commprarTv50, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(false, true));
console.log(compras(true, false));
console.log(compras(false, false));