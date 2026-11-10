const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')


function buscarArquivo(){
    const arquivo = await fs.promises.readFile(filePath)
    const textoArquivo = arquivo.toString('utf-8')
    console.log(textoArquivo)
}