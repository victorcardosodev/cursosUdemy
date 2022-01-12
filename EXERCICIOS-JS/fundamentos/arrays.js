const valores = [7.5, 5.5, 9.4, 8.2];
console.log(valores[0], valores[3]);
console.log(valores[5]); //valores que não existem é dado como undefined

valores[4] = 5.3;
valores[10] = 6.4;

console.log(valores);

//length mostra o tamanho do array;
console.log(valores.length);

//push adiciona valores no array;
valores.push({id: 3}, false, null, "teste");
console.log(valores);

//metodo pop tira o ultimo valor do array;
console.log(valores.pop());

delete valores[1];
console.log(valores);

console.log(typeof valores);