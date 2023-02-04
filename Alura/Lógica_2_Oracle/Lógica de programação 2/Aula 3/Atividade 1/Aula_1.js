var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = "blue";
pincel.fillRect(0,0,600,400);


// Quando pegamos nossa função e assosiamos a algum evento (nesse caso o onclick)
// Sem o (), a função não é chamada, ela é colocada no Onclick e só é chamada quando o evento acontece. 
// Se eu colocar (), eu chamo ela direto
// Nesse caso, somente o navegador sabe os parametos que iremos receber, nesse caso o do mouse

// function exibeAlerta (evento){
//     alert('Clique');
//     console.log(evento);
// }

// tela.onclick = exibeAlerta;


// -------------------------------------------------------------------------------------------------------------

//Explicando o exemplo abaixo até mesmo pra eu conseguir entender: 
// Começamos criando uma função que recebe um parametro dado pelo navegador
// Isso se deu porq não chamamos a função em si, e sim colocamos ela dentro de um evento, o de alerta
//Então ela vai receber o parametro porq indicamos que ela ira receber algum parametro que não sera dado por nós.
// Em seguida criamos a váriavel X e Y que recebe o parametro da função (como estamos utilizando o on click, sera do local do click)
// Dando uma pesquisada, percebi que o .pageX é uma propriedade SOMENTE de leitura, que retorna a cordenada do mouse.
// Ela é usada somente em uma propriedade de mouseevent e serve literalmente pra retornar a coordenada X ou Y. 
// Tela.offsetleft = Serve para informar a váriavel X ou Y que não querendo que ela conte com os cantinhos da tela
// Na hora de executar a função.
// O pincel arc já tá levando em consideração a variavel X e Y e 2 * 3.14 é PI. 
//Enfim, esse programa faz bolinhas, foi meio dificil de entender no começo mas ficou mais fácil agora explicando. 

function exibeBolinha (evento){

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = "pink";
    pincel.beginPath();
    pincel.arc (x, y, 10, 0, 2 * 3.14)
    pincel.fill();

    console.log(x + "," + y);
}

tela.onclick = exibeBolinha;