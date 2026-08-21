const {gets, print} = require('./exercicio-maiorNumero')

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numeroSorteado = gets();
//     numerosSorteados.push(numeroSorteado);
// }

// let maiorNumero = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numeroSorteado = numerosSorteados[i];

//     if (numeroSorteado > maiorNumero) {
//         maiorNumero = numeroSorteado;
//     }
    
// }

// Simplificando o codigo 

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();

    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print (maiorValorEncontrado)
