/*
2 - Caixa eletrônico (DOWHILE)

*Não esqueça de testar seu código!

-Solicite o nome e o cpf do seu cliente.
-Pergunte um valor.
-Ofereça a opção de saque ou depósito.
-Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
-Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
-Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
-Exiba o saldo total.
-Exiba o maior valor inserido(independente de ser depósito ou saque).
-Exiba a média dos valores inseridos(independente de ser depósito ou saque).

REGRAS: 
    1- Considere iniciar a variável saldo com algum valor

    1- Não deve ser permitido sacar um valor não disponível no saldo.

    2- Não deve ser permitido sacar nem depositar um valor negativo.

 */


let nome = prompt("Qual é seu nome ? ");
let cpf = prompt("Qual é seu cpf ? ");
let valor = Number(prompt("Quanto você tem? "));
let resposta = 1;
let maiorValor = 0;
let saldoTotal;
let sacadoTotal;
let maior = 0;
do{
    let opcao = prompt("Você quer executar a opção de saque ou depósito?");
    switch(opcao){
        case "depósito":
            saldoTotal = Number(prompt("Quanto você quer depositar? "));
            valor = valor - saldoTotal;
            console.log("O valor depositado foi de: " + saldoTotal);
            console.log("O você ainda tem em mãos: " + valor);
            resposta = Number(prompt("Você deseja fazer algo mais no nosso caixa? [Digite 1 para sim/ 2 para não]"));
            break;

        case "saque":
            sacadoTotal =  Number(prompt("Quanto você quer sacar? "));
            saldoTotal = saldoTotal - sacadoTotal;
            valor = valor + sacadoTotal;
            console.log("O valor sacado foi de: " + sacadoTotal);
            console.log("O valor que você tem em mãos é de: " + valor);
            console.log("O valor que você tem no banco ainda é de: " + saldoTotal);
            if(sacadoTotal > 0 && saldoTotal == 0){
                alert("[ERRO] Você não tem saldo depositado ainda, tente novamente mais tarde!");
                resposta = 2;
                break;
            } 
            resposta = Number(prompt("Você deseja fazer algo mais no nosso caixa? [Digite 1 para sim/ 2 para não]"));
            break;
    }
    if(saldoTotal > maior) maior = saldoTotal;
    else if(sacadoTotal > maior) maior = sacadoTotal;
    console.log("O maior valor inserido foi de: " + maior);
    console.log("O seu saldo atual é de: " + saldoTotal);
}while(resposta !== 2)
