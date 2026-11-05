const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsElementos = lista.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);

console.log(lista);
console.log(somaDeTodosOsElementos);