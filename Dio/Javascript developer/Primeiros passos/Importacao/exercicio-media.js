const { gets, print } = require("./exercicio-mediaAuxiliar");

let soma = 0;

// Lê o número e já vai somando direto
for (let i = 0; i < 3; i++) {
  soma += gets();
}

let mediaTotal = soma / 3;

if (mediaTotal < 5) {
  print(mediaTotal + " Reprovado");
} else if (mediaTotal >= 5 && mediaTotal < 7) {
  print(mediaTotal + " Recuperação");
} else {
  print(mediaTotal + " Aprovado");
}
