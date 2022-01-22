const prod1 = {nome: "Smartphone Samsung A31"};
prod1.modelo = "A31";
prod1.marca = "Samsung";
prod1.armazen = "128GB";
prod1.memoria = "4GB";
prod1.tela = "6.3";
prod1.preco = "R$ 1.800,00";
prod1["Desconto mínimo"] = 0.4; //Evitar atributos com espaço

console.log(prod1);


const prod2 = {
    preco: "R$3500,00",
    nome: 'Smart TV 65" polegadas LG',
    modelo: "QLED",
    categoria: {
        sala: {
            entretenimento: "Televisões"
        }
    }
}

console.log(prod2);