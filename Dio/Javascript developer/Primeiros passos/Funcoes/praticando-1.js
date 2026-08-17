function meuNome(nome) {
  console.log("Meu nome é " + nome);
}

meuNome("Railana");

function verificarIdade(anoNascimento) {
  const anoAtual = 2026;

  if (anoAtual - anoNascimento >= 18) {
    return (
      "Sua idade é " +
      (anoAtual - anoNascimento) +
      ". " +
      "Maior de idade, pode passar!"
    );
  } else {
    return (
      "Sua idade é " +
      (anoAtual - anoNascimento) +
      ". " +
      "Menor de idade, não pode passar!"
    );
  }
}

console.log(verificarIdade(1999));
