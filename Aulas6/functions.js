function SayMyName() {
    console.log('Meu nome é Walmir')
}

const referenciaNova = SayMyName

referenciaNova()

// function into function (Function as Parameter)

function sayMyCompleteName(SayMyName) {
    SayMyName()
    console.log('Monteiro Neto')
}

sayMyCompleteName(SayMyName)




console.log('-'.repeat(50))

function nameForFunction(){
    console.log('this is a name for function')
}

const nameForOtherFunction = function(){
    console.log('this is a name for other function')
}

nameForFunction()
nameForOtherFunction()

console.log('-'.repeat(50))

function funcao1() {
    console.log(this)
}

const funcao2 = function () {
    console.log(this)
}

const walmir = {
    name: 'Walmir',
    funcao1,
    funcao2
}

walmir.funcao1()
walmir.funcao2()


console.log('-'.repeat(50))

