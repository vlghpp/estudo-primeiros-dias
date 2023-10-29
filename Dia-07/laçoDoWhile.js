//Temos também um laço de repetição Do While, ou seja, 'Faça Enquanto' e ele funciona quase da mesma forma
//do While, mas mesmo que a condição de existência na primeira entrada seja falsa ele ainda executará o
//código. Veja:


//Vou fazer na mesma ideia do exemplo do While que eu fiz sobre o sistema da balada

do{
    let idade = Number(prompt("Qual é sua idade? "));
    if(idade < 18){
        alert("[ERRO] Essa pessoa é MENOR de idade, saia daqui!");
        console.log("Menor de idade!");
    }
}while(idade >= 18);
//Neste código acima ele vai fazer o seguinte:
//linha 8 e linha 14 -> é o nosso loop, então ENQUANTO idade >= 18, ou seja, o sistema não detectar 
//nenhum de menor ele continua o loop normal
//Linha 9 -> Define uma váriavel que receberá a idade digitada pelo usuário
//linha 10 -> Testa se a idade fornecida é menor que 18
//Linha 11 -> dispara um alerta na tela do segurança dizendo que a pessoa é menor de idade
//Linha 12 -> printa no console que a pessoa é menor de idade