// Isso é um exemplo de objeto em JavaScript. O objeto "Railana" possui propriedades como nome, idade, profissão e cidade. 
// Para acessar o valor da propriedade "nome",
// utilizamos a notação de ponto (.) e chamamos "Railana.nome", que retorna o valor "Railana".
const Railana = {
  nome: "Railana",
  idade: 27,
  profissao: "Desenvolvedora",
  cidade: "São Paulo",
};

// console.log(Railana.nome);
// Editando objeto Railana
Railana.altura = 1.58;  

// console.log(Railana);

// Deletando a propriedade "cidade" do objeto Railana
delete Railana.cidade;

// console.log(Railana);

// Adicionando função dentro do objeto Railana
// This é uma palavra-chave que faz referência ao próprio objeto. No caso, this.nome se refere à propriedade
// nome do objeto Railana.
Railana.apresentar = function () {
  return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
};

// console.log(Railana.apresentar());
// ou dentro do objeto, podemos chamar a função assim:

const apresentacao = {
    nome: "Rita",
    idade: 30,
    profissao: "Designer",
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}   

apresentacao.apresentar(); // Chamada da função apresentar do objeto apresentacao

console.log(Railana["nome"]); // Acessando a propriedade nome do objeto Railana de forma dinamica, utilizando colchetes e a chave da propriedade como string.

Railana["profissao"] = "Engenheira"; // Editando a propriedade profissao do objeto Railana de forma dinamica, utilizando colchetes e a chave da propriedade como string.

console.log(Railana["profissao"]); // Acessando a propriedade profissao do objeto Railana de forma dinamica, utilizando colchetes e a chave da propriedade como string.