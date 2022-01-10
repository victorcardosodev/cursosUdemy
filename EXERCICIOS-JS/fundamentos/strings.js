const escola = "cod3r";
console.log(escola.charAt(4)); //qual caracter está nessa casa
//console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(2)); //código do caracter desta casa
console.log(escola.indexOf(3)); //
console.log(escola.substring(2)); //imprime apartir dessa casa
console.log(escola.substring(0,2)); //imprime do primeiro ate um valor antes do segundo

console.log("Vai ". concat("Corinthians ").concat("!!!"));
console.log("Vaiiiii " + "Corinthians " + "!!!!!!!!!!!!!!!!!!");

console.log(escola.replace(3 , "e"));

console.log(escola.replace(/\d/, "Z")); //O simbolo /\d/ é uma expressão regular que manda substuir todos os digitos
console.log(escola.replace(/\w/, "L")); //O simbolo /\w/ substitui a primeira letra mas /\w/g substuuirá todas
console.log(escola.replace(/\w/g, "U"));

console.log("Joaquim, Fernanda, Gabriela".split(",")); //split cria um array pra organizar as strings