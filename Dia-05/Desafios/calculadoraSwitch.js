let primeiroValor = Number(prompt("Digite um valor: "));//Cria um prompt e guarda a resposta na váriavel
let segundoValor = Number(prompt("Digite um segundo valor: "));//Cria um prompt e guarda a resposta na váriavel

let operacao = prompt("Qual operação você quer realizar a partir destes números? ");//Cria um prompt e guarda a resposta na váriavel

switch(operacao){
    case "adição":
        console.log(primeiroValor);                       //Nesse case, ele testa a resposta dada por operacao
        console.log(segundoValor);8                         //caso for "adição" ele somará os dois valores
        console.log(primeiroValor + segundoValor);
        break;

    case "subtração":
        console.log(primeiroValor);                      //Nesse case, ele testa a resposta dada por operacao
        console.log(segundoValor);8                         //caso for "subtração" ele subtrará os dois valores
        console.log(segundoValor);
        console.log(primeiroValor - segundoValor);
        break;
    
    case "multiplicação":
        console.log(primeiroValor);                     //Nesse case, ele testa a resposta dada por operacao
        console.log(segundoValor);8                         //caso for "multiplicação" ele multiplicará os dois valores
        console.log(segundoValor);
        console.log(primeiroValor * segundoValor);
        break;
    
    case "divisão":
        console.log(primeiroValor);                     //Nesse case, ele testa a resposta dada por operacao
        console.log(segundoValor);8                         //caso for "adição" ele dividirá os dois valores
        console.log(segundoValor);
        console.log(primeiroValor / segundoValor);
        break;
    
    default:
        console.log("Não existe a operação que você tentou realizar!");        //Nesse caso, como vimos antes já, nosso default testará as respostas
        break;                                                                      //acima, caso nenhuma for escolhida ele executará seu bloco
}