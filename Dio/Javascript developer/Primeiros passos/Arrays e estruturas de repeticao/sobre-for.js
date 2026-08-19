// Estrutura do for 
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// Exemplo de string em um for 
// const nome = 'Railana Ramos da Silva';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

// outro exemplo

const notas = [];

notas.push(5);
notas.push(7);
notas.push(9);
notas.push(10); 
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}


console.log(soma / notas.length)