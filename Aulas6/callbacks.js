function calcular(x, y, operacao) {
    return operacao(x, y);
}

function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

function multiplicacao(x, y) {
    return x * y;
}

function divisao(x, y) {
    return x / y;
}

console.log(calcular(10, 5, soma));
console.log(calcular(10, 5, subtracao));
console.log(calcular(10, 5, multiplicacao));
console.log(calcular(10, 5, divisao));

document.getElementById('botao').addEventListener('click', () => {
    console.log('Botão clicado');
});