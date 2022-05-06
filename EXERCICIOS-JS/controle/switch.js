const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 11:
        case 10:
        case 9:
            console.log('Quadro de honra');
            break;
        case 8:
        case 7:
            console.log('Aprovado');
            break;
        case 6:
        case 5:
        case 4:
            console.log('Recuperação');
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
}

imprimirResultado(11);
imprimirResultado(9);
imprimirResultado(9.5);
imprimirResultado(8);
imprimirResultado(7);
imprimirResultado(6);
imprimirResultado(5.5);
imprimirResultado(4);
imprimirResultado(3.2);
imprimirResultado(0);
imprimirResultado(-10);
imprimirResultado('a');