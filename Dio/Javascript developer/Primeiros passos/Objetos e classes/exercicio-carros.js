class Carro {
  marca;
  cor;
  mediaDeConsumo; // km/l

  constructor(marca, cor, mediaDeConsumo) {
    this.marca = marca;
    this.cor = cor;
    this.mediaDeConsumo = mediaDeConsumo;
  }
  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return (distanciaEmKm / this.mediaDeConsumo) * precoCombustivel;
  }
}
const toyota = new Carro("Toyota", "Prata", 10);
console.log(toyota.calcularGastoDePercurso(100, 5.5) + " reais");
const honda = new Carro("Honda", 'preto', 15)
console.log (honda.calcularGastoDePercurso(200,6) + " Reais")
