const pessoa = {
    nome: "Walmir",
    idade: 24
}

function falar(prefixo) {
    console.log(prefixo, this.nome)
}

falar.apply(pessoa, ['Olá, meu nome é']);
falar.call(pessoa, 'Olá, meu nome é');