const {gets,print} = require('./Funcoes_auxiliares');

const salarioBruto = gets()
const Beneficio = gets()

function calcularImposto(salario){
    if(salario>0 && salario<=1100){
        return salario - (salario*0.05);
    }else if(salario>1100 && salario<=2500){
        return salario - (salario*0.10);
    }else if(salario>2500){
        return salario - (salario*0.15);
    }else{
        return 'Salario inválido'
    }
}

print(calcularImposto(salarioBruto)+Beneficio);
