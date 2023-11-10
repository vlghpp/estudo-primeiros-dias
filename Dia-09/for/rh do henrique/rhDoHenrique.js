/*

2 - RH do Henrique

Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.

1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.
3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:
    - O cliente recebe anualmente aumento salarial. 
    - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600.
 */


let resposta = true;
let nome;
let idade;
let salario;
let salarioTotal;
let contador = 1.5/100;
while(resposta){
    console.log("------------------------------------------")
    console.log("       INFORMAÇÕES DO FUNCIONÁRIO         ")
    console.log("------------------------------------------")

    nome = prompt("Qual é seu nome? ");
    idade = Number(prompt("Qual é sua idade? "));
    salario = Number(prompt("Qual é seu salário? "));

    alert(`Seu nome é ${nome}, você tem ${idade} anos e um salário de ${salario}.`);

    resposta = prompt("Suas informações estão corretas? [Sim/Não]");
    if(resposta === "Sim") resposta = false;
}
let anoTrabalho = Number(prompt("Em que ano você começou aqui na empresa? "));
for(let c = anoTrabalho; c <= 2023; c++){
    salarioTotal = salario + (salario * contador);
    contador = contador * 2;
    console.log(`${c} - Seu salário era R$${salario} e foi para R$${salarioTotal}.`);
}