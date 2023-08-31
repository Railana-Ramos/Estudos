// document.write("<h1>Olá<h1>")

// aparentemente serve pra pegar alguma tag
let tela = document.querySelector('canvas');

// getContext esta indicando qual contexto iremos escrever na tela. no caso tela.pegue o contexto de 2d 
let pincel = tela.getContext('2d');

//Não é uma função, é como uma variavel, ela aceita receber valor.
// Serve para indicar estilos ou cores ao pincel. 
//Tem que vir ANTES DA PINTURA, PENSA QUE ANTES D PINTAR VC ESCOLHE A COR.
pincel.fillStyle = 'gray';

// fillrect esta pedindo para preencher o pincel com algo, no caso o rect (retangulo)
//Seguindo a ordem: X (Cima) e Y (baixo), depois largura e depois altura. 
pincel.fillRect(0,0, 600, 400);

// brincando com a sobreposição do pincel
pincel.fillStyle = 'green';
pincel.fillRect(0,0, 200, 400);

pincel.fillStyle = 'red';
pincel.fillRect(400,0, 200, 400);

//Aprendendo outras formas (Triangulo)
pincel.fillStyle = 'pink';
// caminho = path 
// começo = begin 
// Serve para criar um caminho de inicio 
pincel.beginPath();
//Mover para tal cordenada: X e depois Y (X largura, e Y altura)
pincel.moveTo(300, 200);

//Linha até as cordenadas informadas
//Duvidas: Porq o inicio do triangulo é de baixo?
//Resposta: O moveto começa do 300 de largura, ou seja, é na metade da tela, mas o Y é largura, então como no codigo
//original tava 300, 200, dizia que iria começar na metade indo até a metade da bandeira. 
// o lineto eu coloquei 200 de 600 (max da bandeira), iniciando de um lado da metade 
// e 400 de 600 no outro lado da metade. No Y ao inves de determinar uma altura pra linha começar (400 que seria o maximo0)
// que começaria em 0 ao contrario (não seria -0), ou seja, de baixo, com uma altura de 400. Se eu colocar 0, vai ter 0
// de altura, começando assim de cima, pois não existe altura para o elemento, ele vai começar do padrão. 
// baixo :
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

// alto
pincel.lineTo(200, 0);
pincel.lineTo(400, 0);
pincel.fill();


// Circulos
pincel.fillStyle = 'lightblue';
pincel.beginPath();

//Vamos iniciar o circulo
// X, Y, Raio (tamanho), angulo inicial, e angulo final em radial. (não ligar para a matematica agr)
pincel.arc(300, 200, 40, 0, 2 * 3.14);
pincel.fill();


//Testando só
pincel.fillStyle = 'lightblue';
pincel.beginPath();
pincel.arc(225, 200, 50, 0, 2 * 3);
pincel.fill();

pincel.fillStyle = 'lightblue';
pincel.beginPath();
pincel.arc(375, 200, 50, 0, 2 * 3.14);
pincel.fill();


//Isso tudo é uma API do canvas