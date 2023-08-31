function mostra (frase){
    document.write(frase)
    document.write("<br></br>")
}

var vitorias = parseInt (prompt("Entre com o número de vitórias:")); 
var empates = parseInt (prompt("Entre com o número de empates:"));
var pontos2 = parseInt (prompt("Entre com o número de pontos da temporada passada:"))

var pontos = (vitorias * 3) + empates; 

mostra("Os pontos do seu time é " + pontos);

if (pontos > pontos2){
        mostra("Seu Time está melhor que o ano passado!");
}
else if (pontos < pontos2){
        mostra("Seu  time está pior que o ano passado");
}
else if (pontos == pontos2){
        mostra("Seu time está igual o ano passado!");
}