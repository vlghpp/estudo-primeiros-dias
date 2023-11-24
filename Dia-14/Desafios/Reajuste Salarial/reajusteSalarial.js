let nome;
let salario;

function perguntaNome(){
    nome = prompt("Qual é seu nome, colaborador(a)?")
    salario = Number(prompt("Qual é seu salário? "))
    calculaSalario(nome, salario)


    var taxa;
    var salarioReajustado

    function calculaSalario(nome, salario){
        if(salario <= 1.500) {
            taxa = 20/100
            salarioReajustado = (salario * taxa) + salario
        }
        if(salario > 1.500 && salario <= 2000){
            taxa = 15/100
            salarioReajustado = (salario * taxa) + salario
        }
        if(salario > 2000 && salario <= 3000){
            taxa = 10/100
            salarioReajustado = (salario * taxa) + salario
        }
        if(salario > 3000) {
            taxa = 5/100
            salarioReajustado = (salario * taxa) + salario
        }
    }

    desejaCalcularNovamente();

    function desejaCalcularNovamente(){
        let resposta = prompt("Deseja calcular novamente com outro valor? [Sim/Não]")
        if(resposta === "Sim"){
            perguntaNome();
        }else{
            console.log(`Obrigado, ${nome}, seu salário era de R$${salario}, com uma taxa de aumento de ${taxa} e agora seu salario é de: R$${salarioReajustado}`)
            console.log("Obrigado por utilizar nosso sistema. :)")
        }
    }
}
perguntaNome();