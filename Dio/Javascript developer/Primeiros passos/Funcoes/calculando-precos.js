function valorFinal(valorProduto, formaPagamento, parcelas) {
  if (formaPagamento === "dinheiro" || formaPagamento === "pix") {
    return (
      "O valor do produto com desconto é de R$" +
      (valorProduto - (valorProduto * 15) / 100)
    );
  } else if (formaPagamento === "debito") {
    return (
      "O valor do produto com desconto é de R$" +
      (valorProduto - (valorProduto * 10) / 100)
    );
  } else if (formaPagamento === "credito" && parcelas <= 2) {
    return "O valor do produto normal é de R$" + valorProduto;
  } 
    else if (formaPagamento === "credito" && parcelas > 2) {
    return (
      "O valor do produto com juros é de R$" +
      (valorProduto + (valorProduto * 10) / 100)
    );
  } else {
    return "Forma de pagamento inválida";
  }
}

console.log(valorFinal(100, "credito", 5));