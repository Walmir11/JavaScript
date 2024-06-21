const { gets, print} = require("./Funcoes_auxiliares");

const qtd = gets();
let maiorPar = null;
let maiorImpar = null;

for (let i = 0; i < qtd; i++) {
    const numero = gets();
    if (numero%2 === 0){
        if (maiorPar === null || numero>maiorPar){
            maiorPar = numero;
        }
    }else{
        if(maiorImpar === null || numero>maiorImpar){
            maiorImpar = numero;
        }
    }    
}

print('O maior número par é: '+maiorPar)
print('O maior número ímpar é: '+maiorImpar)
