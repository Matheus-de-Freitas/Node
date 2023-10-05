const express = require('express')
const path = require('path')

const caminho = path.join(__dirname, 'templates')

const app = express()

app.get('/usuarios/:id' , (requisicao, resposta) => {
    const id = requisicao.params.id
    console.log(`Estamos buscando o usuário ${id}`)

    resposta.sendFile(`${caminho}/usuarios.html`)
})

app.get('/' , (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Eae meu nobre")
})