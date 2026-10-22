const pessoa = {
    genero: 'masculino',
}

const walmir = {
    nome: 'walmir',
    idade: 24,
    __proto__: pessoa
}

walmir.buxa = true

console.log(walmir.genero);

console.log(walmir);
