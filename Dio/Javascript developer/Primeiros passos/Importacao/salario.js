const { gets, print } = require("./salarioAuxiliar");

let valorSalario = gets();
let valorBeneficios = gets();

  if (valorSalario <= 1100) {
    valorSalario = valorSalario - (valorSalario * 0.05) + valorBeneficios;

  } else if (valorSalario > 1100 && valorSalario <= 2500) {
    valorSalario = valorSalario - (valorSalario * 0.10) + valorBeneficios;

  } else {
    valorSalario = valorSalario - (valorSalario * 0.15) + valorBeneficios;
  }

print (valorSalario)