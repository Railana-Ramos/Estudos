var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = "lightblue";
pincel.fillRect(0, 0, 600, 400);



// Tentando modificar a cor do botão direito do mouse qnd desenhar


var cores = ['blue', 'pink', 'red', 'yellow', 'lightblue', 'black'];
var indiceCorAtual = 0;

function exibeBolinha (evento){

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = cores[indiceCorAtual];
    pincel.beginPath();
    pincel.arc (x, y, 10, 0, 2 * 3.14)
    pincel.fill();

    console.log (evento)
    console.log(x + "," + y);
}

tela.onclick = exibeBolinha;


function mudaCor(){
    indiceCorAtual++;
    if (indiceCorAtual >= cores.length) {
        indiceCorAtual = 0; // volta para a primeira cor, azul
      }
      return false; //para não exibir o menu padrão do canvas, que é salvar imagem. 
}

tela.oncontextmenu = mudaCor;