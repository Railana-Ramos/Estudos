function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
  return(imc.toFixed(2) + " Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  return(imc.toFixed(2) + " Peso normal");
} else if (imc > 25 && imc <= 30) {
  return(imc.toFixed(2) + " Acima do peso");
} else if (imc > 30 && imc <= 40) {
  return(imc.toFixed(2) + " Obeso");
} else {
  return(imc.toFixed(2) + " Obesidade grave");
}
}

// Criação de função imediata usando parenteses para encapsular o código e evitar poluição do escopo global.
// A função é chamada imediatamente após a sua definição, passando os valores de peso e altura para calcular o IMC e classificar o resultado.

(function () {
const peso = 80;
const altura = 1.8;
const imc = calcularIMC(peso, altura);
console.log(classificarIMC(imc));
}) ();

