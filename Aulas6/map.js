class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('Vitor'), new Pessoa('José')]

const listaNome = lista.map((value, i) => {
    return `${i} - ${value.name}  `
})

console.log(listaNome)