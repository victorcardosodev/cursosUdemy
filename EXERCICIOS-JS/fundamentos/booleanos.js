let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo)

isAtivo = 1;
console.log(!!isAtivo);

console.log(!false);

isAtivo = 1;
console.log(!isAtivo);

console.log("Situações que os valores são verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!" "); //string com texto;
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os valores que são falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


//caso use || que é == "ou" o valor que será processado é o verdadeiro
let nome = '';
console.log(nome || "Olá desconhecido");

nome = "Victor";
console.log(nome || "Olá desconhecido");