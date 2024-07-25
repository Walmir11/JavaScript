// boolean

const camisaAzul = true;
const camisaVermelha = false;

10 > 5;

const numero = 10;
// usar == faz com que a comparação ignore o tipo, já === só compara tipos iguais
const isNumeroPar = (numero % 2) === 0;

const numeroPar = numero % 2

console.log(numeroPar)

if(numero===0){
    console.log('O número é inválido')
}else if (numeroPar === 0){
    console.log('O número é par')
}else{
    console.log('O número é ímpar')
}

/*
if (!numeroPar === 0){
    console.log('O número é ímpar')
}
*/
