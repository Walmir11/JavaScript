const nota1 = 5
const nota2 = 6
const nota3 = 10

const calculo = (nota1+nota2+nota3)/3
console.log('A média é '+calculo)

if (calculo < 5){
    console.log('Reprovado!!')
}else if(5 <= calculo && calculo <= 7){
    console.log('Recuperação!')
}else{
    console.log('Aprovado')
}