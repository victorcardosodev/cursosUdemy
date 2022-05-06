function Pessoa(nome) {
    this.nome = nome;
    
    this.falar = function() {
        console.log(`Prazer em conhece-lo ${nome}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();