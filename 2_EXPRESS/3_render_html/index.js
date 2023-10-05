const express = require('express')
const path = require('path')

const caminho = path.join(__dirname, 'templates')

const app = express()

app.get('/' , (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Eae meu nobre")
})