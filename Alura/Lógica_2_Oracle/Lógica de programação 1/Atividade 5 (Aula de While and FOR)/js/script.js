function mostra (frase){
    document.write (frase)
    document.write ("<br><br>")
}

var loginCadastrado = "alura";
var senhaCadastrada = "123";

var tentativasMax = 3
var tentativasAtual = 1

while (tentativasAtual <= tentativasMax){

    var loginInformado = prompt("Informe seu login:");
    var senhaInformada = prompt("Informe sua senha:");

    if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada){
        alert("Bem-vindo ao sistema " + loginInformado);
        tentativasMax = tentativasAtual;

    } else if (tentativasAtual == 3){nm
            alert ("Desculpa, devido a quantidade de tentativas, sua conta foi bloqueada por segurança.");
        } 
        else {
            alert("Login inválido. Essa é sua " + tentativasAtual + " tentativa!");
        } 
    tentativasAtual = tentativasAtual +1
    } 
 


                                            // Futebol

//     function mostra(frase) {
//         document.write(frase);
//         document.write("<br><br>")
//     }
// var limite = parseInt(prompt("Digite o ano limite."))
// var anoCopa = 1930;

// while(anoCopa <= limite){
//     mostra ("Teve copa em " + anoCopa)
//     anoCopa = anoCopa + 4;
// }

// mostra ("Acabou")





                                // Contador Decrecente

// var contador = parseInt(prompt("Diga um número"))

// var valorInicial = contador
// var valorFinal = 0

// while (valorInicial > valorFinal){
//     valorInicial = valorInicial - 1;
//     mostra ("Contando .. " + valorInicial);
// }




                                 // Contador utilizando condições

// var valorInicial = 30
// var valorFinal = 40

// while (valorInicial <= valorFinal){

// if (valorInicial == 33){
//     valorInicial = valorInicial + 1;
// } else if (valorInicial == 37){
//     valorInicial = valorInicial + 1;
// } else {
//     mostra ("Contando " + valorInicial);
//     valorInicial = valorInicial + 1
//     }
// }

// mostra ("Fim")




                                        // Contador 1 - 100

// var numeroInicial = 0
// var numeroFinal = 100


// while (numeroInicial <= numeroFinal){
//     mostra ("Contando " + numeroInicial)
//     numeroInicial = numeroInicial + 2
// }
//     mostra ("Fim")