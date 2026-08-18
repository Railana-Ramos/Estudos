class Pessoa {
    nome;
    peso;
    altura;
    
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura; 
        
    }
    calcularImc (){
        return Math.round (this.peso / (this.altura * this.altura))
    }
    classificarImc(){
    if (this.calcularImc() <= 18){
            return (this.calcularImc() + " Abaixo do peso")    
    } else if (this.calcularImc() >= 18 && this.calcularImc() <= 24.9) {
            return (this.calcularImc() + " Peso normal");
    } else if (this.calcularImc() > 25 && this.calcularImc() <= 30) {
            return (this.calcularImc() + " Acima do peso");
    } else if (this.calcularImc() > 30 && this.calcularImc <= 40) {
            return (this.calcularImc() + " Obeso");
    } else {
            return (this.calcularImc() + " Obesidade grave");
}
    }
}

const railana = new Pessoa ("Railana", 80, 1.58)
console.log (railana.classificarImc())

// Outra forma de otimizar o código

// classificarImc() {
//   const imc = this.calcularImc(); // Guardamos o resultado em uma constante

//   if (imc < 18.5) {
//     return `${imc} - Abaixo do peso`;
//   } else if (imc >= 18.5 && imc <= 24.9) {
//     return `${imc} - Peso normal`;
//   } else if (imc > 24.9 && imc <= 30) {
//     return `${imc} - Acima do peso`;
//   } else if (imc > 30 && imc <= 40) {
//     return `${imc} - Obeso`;
//   } else {
//     return `${imc} - Obesidade grave`;
//   }
// }

// // Agora a criação da constante funcionará normalmente:
// const railana = new Pessoa("Railana", 80, 1.58);
// console.log(railana.classificarImc());