const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, 'templates')

app.get('/usuarios/:id', (requisicao, resposta) =>{

    const id = requisicao.params.id
   
    console.log(`O usuário ${id} está desaperecido.`)
    resposta.sendFile(`${caminho}/usuarios.html`)
}) 
app.get('/', (requisicao, resposta) =>{
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.")
})