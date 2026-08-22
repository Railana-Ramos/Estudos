const {gets, print} = require('./maiorParMenorImparAuxiliar')

// let maiorValorEncontradoPar = 0;
// let menorValorEncontradoImpar = null;

// for (let i = 0; i < 10 ; i++) {
//     let numeros = gets();
    
//     if (numeros % 2 === 0) {
//         if (numeros > maiorValorEncontradoPar) {
//             maiorValorEncontradoPar = numeros;
//         }
//     } else {
//             if (menorValorEncontradoImpar === null || numeros < menorValorEncontradoImpar) {
//             menorValorEncontradoImpar = numeros;
//         }
//         }
//     }


// print (maiorValorEncontradoPar)
// print (menorValorEncontradoImpar)


let maiorPar = 0;
let menorImpar = null;

for (let i = 0; i < 10; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        maiorPar = Math.max(maiorPar, numero);
    } else {
        menorImpar = (menorImpar === null) ? numero : Math.min(menorImpar, numero);
    }
}

print(maiorPar);
print(menorImpar);