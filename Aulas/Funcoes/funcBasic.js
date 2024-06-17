// Formando a função
function sayMyName(name){
    console.log('Your name is '+ name);
}

// Execulta a função
sayMyName('heisenberg');

// Funções com retorno
function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(10));
const quadradoDe10 = quadrado(10);
console.log(quadradoDe10);