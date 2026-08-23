const { gets, print } = require("./maiorParMenorImparAuxiliar");

let maiorValorEncontradoPar = null;
let menorValorEncontradoImpar = null;
let numeros = gets();

while (numeros !==undefined ) {

  if (numeros % 2 === 0) {
    if (maiorValorEncontradoPar === null || numeros > maiorValorEncontradoPar) {
      maiorValorEncontradoPar = numeros;
    }
  } else {
    if (
      menorValorEncontradoImpar === null || numeros < menorValorEncontradoImpar) {
      menorValorEncontradoImpar = numeros;
    }
  }
  numeros = gets();
}

print(maiorValorEncontradoPar);
print(menorValorEncontradoImpar);

// O que mudou no fluxo:
// Lemos o primeiro valor (let numeros = gets()) fora do loop.
// O while verifica: "Esse valor existe? (é diferente de undefined?)". 
// Se sim, ele entra e faz os testes de par/ímpar.
// No finalzinho do bloco do while, lemos o próximo número com numeros = gets().
// Ele volta para o início do while e repete tudo até a lista acabar!



// let maiorPar = 0;
// let menorImpar = null;

// for (let i = 0; i < 10; i++) {
//     const numero = gets();

//     if (numero % 2 === 0) {
//         maiorPar = Math.max(maiorPar, numero);
//     } else {
//         menorImpar = (menorImpar === null) ? numero : Math.min(menorImpar, numero);
//     }
// }

// print(maiorPar);
// print(menorImpar);