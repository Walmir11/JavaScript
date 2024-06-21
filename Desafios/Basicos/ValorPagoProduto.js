let produto = 100
/*
1-Debito
2-Dinheiro
3-2xCartão
4-acima de 2xCartão
*/
const formaPagamento = 4

if(formaPagamento === 1){
    produto = produto - (produto*0.10) 
}else if(formaPagamento === 2){
    produto = produto - (produto*0.15)
}else if(formaPagamento === 3){
    
}else if(formaPagamento === 3){
    produto = produto + (produto*0.10) 
}else{
    console.log('Dígito inválido')
}
console.log('O preço final a ser pago é de '+produto)
