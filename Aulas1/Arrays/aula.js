const alunos = ['João', 'vitor', 'maria'];

console.log(alunos);
// vai para a posição 3
alunos.push('Walmir');
// Sobrescreve a posição 
alunos[4] = 'Joaquim';

alunos.push(23);

console.log(alunos[3]);
console.log(alunos);
// Remove o ultimo
console.log(alunos.pop());
// Remove o primeiro
console.log(alunos.shift());

console.log(alunos);
// tamanho da lista
console.log(alunos.length);


