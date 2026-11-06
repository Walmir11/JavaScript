const lista = [{ nome: 'Renan' }, { nome: 'Andresa' }, { nome: 'Vitor' }, { nome: 'Aline' }, { nome: 'Ana' }, { nome: 'Bruna' }]


console.log(lista.map((e) => e.nome).join('; '))

console.log('-'.repeat(50))

console.log(
    lista.map((e) => e.nome)
    .filter((nome) => nome.startsWith('A'))
    .join('; '))