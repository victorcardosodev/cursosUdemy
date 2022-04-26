function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Parabéns você aprovado e sua nota foi: ' + nota + ' !!');
    }
}

soBoaNoticia(8);
soBoaNoticia(6);
soBoaNoticia(7);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(valor + ' é verdadeiro !');
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo(2);
seForVerdadeEuFalo(1, 2);
seForVerdadeEuFalo({});