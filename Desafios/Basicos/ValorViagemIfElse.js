const combustivelUsado = 'Etanol'
const precoGasolina = 6.10;
const precoEtanol = 3.42;
const gastoMedioPorKm = 10;
const distanciaKm = 1580;
let valorGasto = 0;

const litroConsumido = distanciaKm / gastoMedioPorKm;

if(combustivelUsado === 'Gasolina'){
    valorGasto = litroConsumido * precoGasolina;
}else if(combustivelUsado === 'Etanol'){
    valorGasto = litroConsumido * precoEtanol;
}else{
    console.log('Combustível não existente');
}

console.log(valorGasto);

// Para arredondar
console.log(valorGasto.toFixed(2));
