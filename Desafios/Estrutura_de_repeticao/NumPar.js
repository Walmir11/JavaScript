const numeros = [2,5,65,32,8]
numeros.push(85)

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 === 0){
        console.log('O número '+numeros[i]+' é par')
    }else{
        console.log('O número '+numeros[i]+' é ímpar')
    }
    
}