const {gets,print} = require('./Funcoes_aux_MediaAluno')

const nota = gets()


if(nota >= 5 && nota <7){
    print('Recuperação')
}else if (nota >= 0 && nota < 5){
    print('Reprovado')
}else if(nota >= 7){
    print('Aprovado')
}else{
    print('Número inválido')
}