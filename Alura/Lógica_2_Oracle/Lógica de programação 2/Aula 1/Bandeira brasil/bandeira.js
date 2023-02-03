let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'LimeGreen';
pincel.fillRect(0,0,600,400);


pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo (550,200);
pincel.lineTo (50,200);
pincel.lineTo (300,40);
pincel.fill();

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo (550,200);
pincel.lineTo (50,200);
pincel.lineTo (300,360);
pincel.fill();

pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3);
pincel.fill();
