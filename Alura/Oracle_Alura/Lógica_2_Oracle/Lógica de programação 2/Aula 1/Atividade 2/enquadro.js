let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.moveTo(0, 0);
pincel.lineTo(0,400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.moveTo(50, 120);
pincel.lineTo(50, 350);
pincel.lineTo(275, 350);
pincel.fill();























// var tela = document.querySelector('canvas');
// var pincel = tela.getContext('2d');
// pincel.fillStyle='black';
// pincel.beginPath();
// pincel.moveTo(50, 50);
// pincel.lineTo(50, 400);
// pincel.lineTo(400, 400);
// pincel.fill();

// pincel.fillStyle='white';
// pincel.beginPath();
// pincel.moveTo(100, 175);
// pincel.lineTo(100, 350);
// pincel.lineTo(275, 350);
// pincel.fill();