// var input = document.getElementById("numero")
// Essas duas formas de fazer as váriaveis iriam dar o mesmo
var input = document.querySelector("input")
var segredo = Math.round (Math.random() * 10); 
input.focus();

function boca(){
    if (input.value == segredo){
        alert ("Parabéns, você acertou!")
    } else {
        alert ("Você errou!")
    }
    input.value = "";
    input.focus();
}
// Poderia fazer essa questão do button também dentro do html, com o "onlick ="function"" direto no elemento, mas eu chamaria a função
// Nesse caso não estou chaamndo, e sim "colocando" a função dentro do movimento de click, por isso não usa o ()
var button = document.querySelector("button");
button.onclick = boca;