const pessoa = {
    idade: 18
}

const walmir = {
    nome: "Walmir",
    __proto__: pessoa,
}

console.log(walmir.idade)

const renan = Object.create(pessoa)

renan.nome = "Renan"

console.log(renan.idade)