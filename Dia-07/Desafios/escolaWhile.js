/*
1 - School (WHILE)

Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


- A média geral dos alunos
- Quantos homens enviaram as notas
- Quantas mulheres tiveram nota acima de 7
- Qual a maior nota entre os homens

*Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de alunos! */



let contadorM = 0;
let contadorF = 0;
let contadorF7 = 0;
let media;
let soma = 0;
let maiorM = 0;
let resposta = "sim"
while(resposta !== "não"){
    let nota = Number(prompt("Qual é sua nota? "));
    let sexo = prompt("Qual seu sexo? [M/F]");

    if(sexo === "M")  contadorM++;
    if(sexo === "M" && nota > maiorM) maiorM = nota

    if(sexo === "F")  contadorF++;
    if(sexo === "F" && nota > 7) contadorF7++
    
    soma += nota;
    media = soma/(contadorM + contadorF);

    resposta = prompt("Tem mais alguém para cadastrar ? [sim/não]")
}

console.log("O numero de homens cadastrados foram de: " + contadorM);
console.log("O numero de mulheres cadastrados foram de: " + contadorF);
console.log("A maior nota entre os meninos foi de: " + maiorM);
console.log("O número de meninas que obtiveram nota acima de 7 foi de: " + contadorF7);
console.log("A média entre os alunos foi de: " + media);



