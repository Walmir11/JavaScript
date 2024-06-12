const precoCombustivel = 6.10;
const gastoMedioPorKm = 10;
const distanciaKm = 1580;

const litroConsumido = distanciaKm / gastoMedioPorKm;
const valorGasto = litroConsumido * precoCombustivel;

console.log(valorGasto);

// Para arredondar

console.log(valorGasto.toFixed(2));
