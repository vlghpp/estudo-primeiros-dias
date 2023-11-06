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