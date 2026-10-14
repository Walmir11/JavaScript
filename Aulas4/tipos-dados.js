/*
    boolean
    null
    undefined
    number
    string
    symbol
*/

// object


// true false

// const nome = '';

// if (nome) {
//     console.log('preenchido')
// }

console.log(!!'false')

const x = null;
let y;

console.log(x);
console.log(y);

`test`

const id = 20;

console.log('<div id="' + id + '">teste<div>');

console.log(`
    <div id="${id}">
        teste
    <div>
`);


// Objeto em javascript
const X = {
    nome: 'walmir',
    idade: 24,
    sexo: "masculino",
    cpf: "12345678909",
}

X['nome'] = "Walmizão"
X['idade'] = 99

X.sobrenome = "Neto";

console.log(X);


const pessoa = {
    nome: "Walmir",
    idade: 24,
    falar: function() {
        console.log('Meu nome é ' + this.nome)
    }
}

pessoa.falar()



