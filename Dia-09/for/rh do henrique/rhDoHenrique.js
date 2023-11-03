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