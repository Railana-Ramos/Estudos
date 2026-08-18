class Pessoa {
    nome;
    idade;
    anoDeNascimento;

// O contructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
// Ele é chamado automaticamente quando uma nova instância da classe é criada.
// Uma instancia é um objeto criado a partir de uma classe. 
// Cada instância tem suas próprias propriedades e métodos, 
// que podem ser diferentes de outras instâncias da mesma classe.
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}
// const ritaDeCassia = new Pessoa ("Rita", 30)

// console.log(ritaDeCassia)

// Outra forma de fazer

// const Railana = new Pessoa()
//     Railana.nome =  "Railana";
//     Railana.idade = "25";


// Railana.descrever();

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}
const ritaDeCassia = new Pessoa("Rita", 30);
const railana = new Pessoa("Railana", 25);

compararPessoas(ritaDeCassia, railana);