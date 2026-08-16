const peso = 95;
const altura = 1.8;
const imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(imc.toFixed(2) + " Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log(imc.toFixed(2) + " Peso normal");
} else if (imc > 25 && imc <= 30) {
  console.log(imc.toFixed(2) + " Acima do peso");
} else if (imc > 30 && imc <= 40) {
  console.log(imc.toFixed(2) + " Obeso");
} else {
  console.log(imc.toFixed(2) + " Obesidade grave");
}
