const valorEtanol = 3.79;
const valorGasolina = 5.79;
const tipoCombustivel = "etanol";
const gastoMedioPorKm = 10;
const distanciaPercorrida = 200;

if (tipoCombustivel === "etanol") {
    console.log("O valor gasto para viagem será de R$" + (valorEtanol * distanciaPercorrida) / gastoMedioPorKm);
} else if (tipoCombustivel === "gasolina") {
    console.log("O valor gasto para viagem será de R$" + (valorGasolina * distanciaPercorrida) / gastoMedioPorKm);
} else {
    console.log("Tipo de combustível inválido.");
}