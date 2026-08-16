const nota1 = 7.5;
const nota2 = 2.0;
const nota3 = 9.0;
const media= (nota1 + nota2 + nota3) / 3;

if (media <= 5) {
    console.log("O aluno foi reprovado com a média de " + media.toFixed(1));
} else if (media < 7) {
    console.log("O aluno está em recuperação com a média de " + media.toFixed(1));
} else if (media > 7){
    console.log("O aluno foi aprovado com a média de " + media.toFixed(1));
}