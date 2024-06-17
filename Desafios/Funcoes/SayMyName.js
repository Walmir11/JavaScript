function sayMyName(nome){
    return 'Meu nome é '+ nome;
    console.log('Meu nome é '+ nome);
}

function verificarIdade(idade){
    console.log('Sua idade é de '+idade)
    if (idade >= 18){
        console.log(sayMyName('Walmir ') + 'Maior de idade');
    }else{
        console.log('Menor de idade');
    }
}

function main(){
    sayMyName('Walmir');
    sayMyName('Giniceu');
    verificarIdade(21);
}

main();