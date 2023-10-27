let opcao = prompt("Escolha uma opção de um a cinco");//Define um prompt pro usuario responder que caso ele quer!

switch(opcao){
    case "um"://Refere-se ao primeiro caso, ou seja, acontecerá tudo o que tiver nesse bloco se for escolhido pelo usuário
        console.log("Você escolheu o primeiro caso!");//    
                                                        //
                                                        //  Possíveis linhas de código caso o usuário escolha esse case
                                                        //  poderia ter uma function que faz alguma coisa no sistema
                                                        //  um if/else para testar algo no projeto, ou na váriavel 'opcao'
                                                        //
                                                        //
        break;//Quebra a sequência do loop e o "expulsa" para fora

    case "dois"://Refere-se ao segundo caso, ou seja, acontecerá tudo o que tiver nesse bloco se for escolhido pelo usuário
        console.log("Você escolheu o segundo caso!");
        break;//Quebra a sequência do loop e o "expulsa" para fora

    case "tres"://Refere-se ao terceiro caso, ou seja, acontecerá tudo o que tiver nesse bloco se for escolhido pelo usuário
        console.log("Você escolheu o terceiro caso!");
        break;//Quebra a sequência do loop e o "expulsa" para fora

    case "quatro"://Refere-se ao quarto caso, ou seja, acontecerá tudo o que tiver nesse bloco se for escolhido pelo usuário
        console.log("Você escolheu o quarto caso!");
        break;//Quebra a sequência do loop e o "expulsa" para fora

    case "cinco"://Refere-se ao quinto caso, ou seja, acontecerá tudo o que tiver nesse bloco se for escolhido pelo usuário
        console.log("Você escolheu o quinto caso!");
        break;//Quebra a sequência do loop e o "expulsa" para fora

    //O default é padrão em português, mas ele funciona como se fosse um else, então caso nenhum dos casos acima seja escolhido, o default que será!
    default:
        console.log("Você não escolheu nenhuma das opções pré-estabelecidas!");
        break;
}