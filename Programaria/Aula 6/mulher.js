const express = require("express");
const router = express.Router();

const app = express()
const porta = 3333;

function mostraMulher(request, response){
    response.json({
        nome: 'Railana Ramos',
        imagem: 'https://github.com/Railana-Ramos.png',
        minibio: 'Estudante e Desenvolvedora'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta,mostraPorta);