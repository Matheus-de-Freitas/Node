const express = require('express')

const app = express()

app.get('/' , (requisicao, resposta) => {
    resposta.send("Este é o meu back-end")
})

app.listen(3000, () => {
    console.log("Eae meu nobre")
})