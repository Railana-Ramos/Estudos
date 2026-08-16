const valorProduto = 100;
const formaPagamento = "credito";
const parcelas = 5;

if (formaPagamento === "dinheiro" || formaPagamento === "pix") {
  console.log(
    "O valor do produto com desconto é de R$" +
      (valorProduto - (valorProduto * 15) / 100),
  );
} else if (formaPagamento === "Debito") {
  console.log(
    "O valor do produto com desconto é de R$" +
      (valorProduto - (valorProduto * 10) / 100),
  );
} else if (formaPagamento === "credito" && parcelas <= 2) {
  console.log(
    "O valor do produto com desconto é de R$" +
      (valorProduto),
  );
} else if (formaPagamento === "credito" && parcelas > 2) {
  console.log(
    "O valor do produto com desconto é de R$" +
      (valorProduto + (valorProduto * 10) / 100),
  );
} else {
  console.log("Forma de pagamento inválida");
}
