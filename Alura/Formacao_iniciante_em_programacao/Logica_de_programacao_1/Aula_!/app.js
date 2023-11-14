alert("Boas vindas ao jogo do número secreto! Você terá 5 tentativas!");
let numeroSecreto = Math.round(Math.random() * 30);
retornaNumero();
let tentativas = 5;



for (let i = 0; i < 5; i++) {

    if (retornaNumero != numeroSecreto) {
        alert("Que pena, você errou, agora te restam apenas " + tentativas);
        retornaNumero();
        tentativas --;
    }

    if (numeroSecreto == retornaNumero) {
        alert("Parabéns, você acertou, o número era " + numeroSecreto);
        break;
    }

}

function retornaNumero(){
    let numeroDigitado = parseInt(prompt("Digite um número"));
    return numeroDigitado.number;
}