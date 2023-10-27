let opcao = prompt("Oque você quer fazer ? (gasolina/alcool/calibrar");//Cria um prompt e guarda a resposta na váriavel

switch(opcao){
    case "gasolina"://Cria um caso pra caso a resposta seja gasolina, executará esse bloco de código
        let litrosGasolina = Number(prompt("Quantos litros de gasolina você quer encher? [digite apenas o valor númerico em litros]"));
        let precoGasolina = 5;                                  //Nesse bloco de código ele pergunta o valor de gasolina que ele quer e retorna em Number
        let totalGasolina = litrosGasolina * precoGasolina;     //define o preço da gasolina em R$ 5, pega a quantidade de litros oferecida pelo usuario
        console.log(totalGasolina);                             //e multiplica pelo preço da gasolina, depois armazena em uma variável(totalGasolina)
        break;                                                  //depois mostra no console o valor pago pela gasolina (gasolina * R$)

    case "alcool":
        let litrosAlcool = Number(prompt("Quantos litros de gasolina você quer encher? [digite apenas o valor númerico em litros]"));
        let precoAlcool = 3;                                    //Nesse bloco de código ele pergunta o valor de gasolina que ele quer e retorna em Number
        let totalAlcool = litrosAlcool * precoAlcool;           //define o preço do alcool em R$ 3, pega a quantidade de litros oferecida pelo usuario
        console.log(totalAlcool);                               //e multiplica pelo preço do alcool, depois armazena em uma variável(totalAlcool)
        break;                                                  //depois mostra no console o valor pago pelo alcool (alcool * R$)

    case "calibrar":
        console.log("Pneus calibrados com sucesso!");           //Neste caso de calibrar os pneus ele apenas escreve no console que os pneus foram calibrados
        break;
}