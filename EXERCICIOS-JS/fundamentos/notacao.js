console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome ='Bola';
//obj1['nome'] ='Bola2';

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome;
//    this.exec = function () {
//        console.log('Exec....')
    }
//}

function carro(marca) {
    this.marca = marca;
}

/*carro = {
    nome: 'Aventador SV',
    motor: 'tal',
    aceleracao: 2.9,
    rodas: {
        traseira: 21,
        dianteira: 20
    }
}*/
carro.lamborghini = {
    marca: 'Lamborghini',
    nome: 'Aventador SV',
    aceleracao: 2.9,
    rodas: {
        traseira: 21,
        dianteira: 20
    }
}

console.log(carro)
const obj3 = new Obj('Cadeira');
console.log(obj3)
//obj3.exec();
//console.log(obj3)