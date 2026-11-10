const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        // Dica: passando 'utf-8' diretamente, readFile já retorna uma string em vez de Buffer
        const textoArquivo = await fs.promises.readFile(filePath, 'utf-8')
        console.log(textoArquivo)
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro.message)
    }
}

buscarArquivo()