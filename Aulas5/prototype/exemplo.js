function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log('Meu nome é ' + this.nome)
}

const walmir = new Pessoa('walmir', 24);

walmir.falar()

console.log(walmir)


class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log('Meu nome é ' + this.nome)
    }
}
