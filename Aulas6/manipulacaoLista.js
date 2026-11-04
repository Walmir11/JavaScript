const lista = [1,2,3,4,5];

lista.forEach((value, i, listRef) => {
    console.log(value, i, listRef);
})

const cb = (value, i, listRef) => {
    console.log(value, i, listRef);
}

console.log('-'.repeat(50))

lista.forEach(cb);

console.log('-'.repeat(50))


for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista)
}