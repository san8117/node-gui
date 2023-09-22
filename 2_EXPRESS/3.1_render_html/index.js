const express = require("express")
const { get } = require("http")

const app = express()

app.get('/', (requisicao, resposta) =>{
    resposta.send("Seja bem-vindo(a) ao meu servidor")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.")
})