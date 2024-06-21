const {gets, print} = require('./Funcoes_aux_maiorNum');

const qtdAlunos = gets();
let maiorNum = -1;

for (let i = 0; i < qtdAlunos; i++) {
    const num_sorteado = gets();
    print(num_sorteado)
    if (num_sorteado>maiorNum){
        maiorNum = num_sorteado;
    }
}

print('O maior número é '+maiorNum)