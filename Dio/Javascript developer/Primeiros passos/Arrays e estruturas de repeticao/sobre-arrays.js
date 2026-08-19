// Criação de uma array
const alunos = ['joao', 'maria', 'jose']

// Adição de um item a array 
// alunos.push('leonardo')
// ou 
// alunos[4] = 'vinicius'

console.log(alunos)

// Retirando itens de uma array 
// alunos.pop(); remove o ultimo item de uma array

console.log(alunos.pop())
console.log(alunos)

// alunos.shift() retira o primeiro item da array 

alunos.shift();
console.log(alunos)

const notas = [];

notas.push(5);
notas.push(7);
notas.push(9);
notas.push(10); 
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]

console.log (soma / notas.length)