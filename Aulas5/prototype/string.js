function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function (){
    console.log(`Olá meu nome é ${this.nome}`)
}

console.log(new Pessoa("João", 24))

const walmir = {
    genero: 'masculino'
}

Pessoa.call(walmir, 'Walmir', 30);


console.log(walmir);

console.log('-'.repeat(50))

String.prototype.toPlang = function(){
    return `P ${this}`
}
    
console.log('test'.toPlang());