class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gasto_medio) {
        this.marca =  marca;
        this.cor = cor;
        this.gastoMedioPorKm = gasto_medio;
    }

    GastoDePercurso (distanciaKm, precoCombustivel) {
        const litroConsumido = distanciaKm / this.gastoMedioPorKm;
        const valorGasto = litroConsumido * precoCombustivel;
        console.log('O valor gasto na viagem foi R$' + valorGasto)
    }
}

const carro1 = new Carro('Fiat', 'vermelho',10);
console.log(carro1);
carro1.GastoDePercurso(70, 5);
