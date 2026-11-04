function soma(x) {
    return function (y){
        return x + y;
    }
}

const somaParcial = soma(10);



console.log(soma(1)(2));

console.log(somaParcial(2));
console.log(somaParcial(9));
