let idade = prompt("Qual é sua idade?");//Cria um prompt e guarda a resposta na váriavel


//O switch pode ser usado como dito antes no outro arquivo JavaScript, como um if/else, sendo os if's == case's
//e else == default, então podemos disparar switch sendo true liga-lo sempre e então definir os cases com base 
//na resposta que vai ser dada pelo usuário acerca da idade!

switch(true){
    case idade <= 5://Caso a resposta dada pelo usuário seja menor ou igual a 5 ele executa este bloco
        console.log("Você tem idade igual a 5 ou inferior!");
        break;
    
    case idade > 5 && idade <= 10://Caso a resposta dada pelo usuário seja maior e menor do que 10 ele executa este bloco
        console.log("Você tem entre 6 a 10 anos!");
        break;
    
    case idade > 18://Caso a resposta dada pelo usuário seja maior que 18 ele executa este bloco
        console.log("Você já é de maior, parabéns!");
        break;

    default://Caso a resposta dada pelo usuário não represente uma idade legível ele executará este bloco
        console.log("Você digitou uma idade não entendida!");
        break;
}