class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalculoIMC(){
        const IMC = this.peso/(this.altura**2)
        console.log('O IMC foi de '+IMC.toFixed(2))

        if (IMC <= 18.5){
            console.log('Abaixo do peso!')
        }else if(18.5 < IMC <= 25){
            console.log('Peso normal')
        }else if(25 < IMC <= 30){
            console.log('Acima do peso!')
        }else if(30 < IMC <= 40){
            console.log('Obeso!!')
        }else{
            console.log('Obesidade grave!!!')
        }
    }
}

const P1 = new Pessoa('José',70,1.75);
P1.CalculoIMC();