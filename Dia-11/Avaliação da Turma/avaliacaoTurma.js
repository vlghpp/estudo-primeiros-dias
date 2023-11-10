/*

LISTA DE EXERCICIOS --1  Avaliação da turma

1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;
2 - Para cada aluno inserido pergunte o nome e a nota da prova;
3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;
4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. Para calcular a média deve dividir a soma das notas pelo total de alunos.
*/

let nomes = [];
let notas = [];
let contador = 0;
let resposta = "Sim";
let soma = 0;
let media;

while(resposta != "Não"){
    let nomeAluno = prompt("Qual é o nome do aluno? ");
    nomes.push(nomeAluno);
    let notaAluno = Number(prompt("Qual foi a nota de " + nomeAluno + "? "));
    notas.push(notaAluno);
    resposta = prompt("Deseja adicionar mais algum aluno? ");
    contador++
}

for(let c = 0; c < notas.length; c++){
    console.log(`ALUNO - ${nomes[c]} teve a nota de: ${notas[c]}.`);
    soma = soma + notas[c];
    let divisor = notas.length;
    media = soma / divisor;
}

console.log(`A soma das notas foi de: ${soma} e a média geral foi de: ${media}.`)