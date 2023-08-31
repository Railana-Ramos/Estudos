var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaQuadrado (x,y, cor){
pincel.fillStyle = cor;
pincel.fillRect(x,y,50,50)

pincel.fillStroke ='black';
pincel.strokeRect(x,y,50,50);
}

// var cor = ['red', 'green', 'yellow'];
var cores = ['red', 'green', 'yellow'];

for (let x = 0; x < 600; x = x + 50) {

    for (let y = 0;y < 100; y = y + 50) {
        desenhaQuadrado(x, y, cores[1]);
    }
    desenhaQuadrado(x, 0, cores[2]);
}


// for (let x = 0; x < 600; x = x + 50) {

//     for (let y = 0;y < 100; y = y + 50) {
//         desenhaQuadrado(x, y,  cores[2]);
//     }
//     desenhaQuadrado(x, 0, cores [1]);
// }




// for (let x = 0; x < 600; x = x + 50) {
//     for (let y = 0;y < 400; y = y + 50) {
//         desenhaQuadrado(x, y, cor[0]);
//     }

// desenhaQuadrado(x, 0, cor [1]);

// }



// for (let x = 0; x < 600; x++) {
//     for (let y = 0;y < 200; y++) {
//         desenhaQuadrado(x, y, 'pink');
//         y = y + 50;
//     }
//     desenhaQuadrado(x, 50, 'pink');
//     x = x + 50;
// }



// pincel.fillStyle = 'green';
// pincel.fillRect(0,0,50,50)

// //Serve para adicionar uma borda
// pincel.fillStroke ='black';
// pincel.strokeRect(0,0,50,50);

// pincel.fillRect(50,0,50,50);
// pincel.strokeRect(50,0,50,50);

// pincel.fillRect(100,0,50,50);
// pincel.strokeRect(100,0,50,50);