const express = require("express")
const router = express.Router();

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: 'Railana Ramos',
        imagem: 'https://github.com/Railana-Ramos.png',
        minibio: 'Estudante e Desenvolvedora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/webp-express/webp-images/uploads/2022/11/10-ninadahora1200x628desktop.png.webp?x48208',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres (request, response){
    response.json (mulheres);
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta,mostraPorta);