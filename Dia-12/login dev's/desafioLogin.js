/*Comunidade DoDev

1 - Crie 2 arrays: um para nomes e um para senhas
2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.
4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso
6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios. */


/*Falta:
    -Planejo fazer uma segunda versão desse código com html, css e banco de dados mais para frente
    -O código está pronto para o que o exercicio pedia, mas quero melhora-lo mais á frente.
    att: Henrique Patricio, 10/11/2023. 14:57 PM
*/

let nomes = [];
let senhas = [];
let encerramento;
let resposta;
let booleano = true;

do{
    alert("O QUE NOSSO SITEMA OFERECE: cadastro, login, excluir ou encerrar o programa.")
    let opcao = prompt("O que você deseja fazer no nosso sistema? ");
    
    switch(opcao){

        /*O bloco de código abaixo armazena nos arrays 'nomes' e 'senhas' o valor respectivamente digitado, logo depois pergunta se o
        usuário quer continuar no programa e quer fazer algo mais, caso a resposta seja positiva ele executara um código, caso negativa
        executará algo em específico. */
        case "cadastro":
        let nomeCadastro = prompt("Digite um login para o cadastro: ");
        nomes.push(nomeCadastro);
        let senhaCadastro = prompt("Digite uma senha para ao cadastro: ");
        senhas.push(senhaCadastro);
        encerramento = prompt("Você deseja realizar mais alguma operação? [Sim/Não]");

        /*O bloco de código a baixo faz com que o usuário tenha poder de decidir se quer continuar no programa, caso a resposta foi algo 
        diferente de 'Não' ele da um 'continue' -> continue faz com que o programa ignore tudo abaixo dele e entra em mais uma vez no loop, 
        caso a resposta seja 'Não' o programa da um break -> break faz com que o programa saia imediatamente do loop. */
        if(encerramento !== "Não"){
            continue;
        }else break;

//----------------------------------------------------------------------------------------------------
        case "login":
        do{
            let nomeLogin = prompt("Digite o seu login: ");
            const booleanNomeLogin = nomes.includes(nomeLogin);
            let senhaLogin = prompt("Digite sua senha: ");
            const booleanSenhaLogin = senhas.includes(senhaLogin);
            
            if(booleanNomeLogin === true && booleanSenhaLogin === true){
                alert("Acesso permitido, seja bem vindo " + nomeLogin)
                console.log("O sistema foi encerrado por que o usuário acertou de primeira!");
                break;
            }

            /*ATÉ AQUI TA FUNCIONANDO CERTINHO, ELE VERIFICA SE TA CADASTRADO, CASO ESTEJA
            RETORNA QUE O ACESSO FOI PERMITIDO!*/


            /*Pensei em colocar um if testando se o login já esta cadastrado e ele errou mostra um
            aviso de erro, caso tente se cadastrar com um login que não existe ele exibe um erro
            mostrando isso.*/
            

            if(booleanNomeLogin === false || booleanSenhaLogin === false) {
                alert("[ERRO] Usuário ou senha incorretos! Você tem mais 3 tentativas para efetuar o login!");

                let c = 0;

                while(c < 3){
                    nomeLogin = prompt("Digite o seu login: ");
                    const testeNomeLogin = nomes.includes(nomeLogin);
                    senhaLogin = prompt("Digite sua senha: ");
                    const testeSenhaLogin = senhas.includes(senhaLogin);

                    /*Essa linha de código abaixo verifica se o usuário digitou corretamente as suas
                    credenciais, caso tenha, ele mostra um aviso de bem sucedido. */
                    if(testeNomeLogin === true && testeSenhaLogin === true){
                        alert("Acesso permitido, seja bem vindo " + nomeLogin);
                        console.log("O sistema foi encerrado por que o usuário acertou em alguma das tentativas!")
                        break;
                    }


                    /*Essa linha de código abaixo verifica quando o contador chegar em 2, ou seja,
                    0,1,2 (3 tentativas) e o usuário continuar errando o login ele mostra um erro
                    que ele não conseguiu efetuar o login. Está funcionando! */
                    if(c === 2 && testeNomeLogin === false && testeSenhaLogin === false) {
                        alert("Infelizmente você não conseguiu efetuar o acesso :(");
                        console.log("O sistema foi encerrado por limite de tentativas!");
                        break;
                    }
                    c++;
                }   
            }
        } while(booleanNomeLogin !== true && booleanSenhaLogin !== true);
        /*Código funcionando até aqui perfeitamente! */

//-------------------------------------------------------------------------------------------------------------------


        case "excluir":
            let nomeExcluir = prompt("Qual login você deseja excluir? ");
            const testeNomeExcluirLogin = nomes.includes(nomeExcluir);

            /*O bloco de código abaixo testa se o login digitado pelo usuário para excluir realmente esteja dentro do array, caso esteja
            ele encontra o índice do elemento do array e depois usa esse indice para que o elemento receba null, ou seja, exclua o valor
            que estava ali antes. E caso o login digitado não pertença ao array, ele dispara um alert falando que o login não foi encontrado.*/
            if(testeNomeExcluirLogin === true){
                let indiceExcluirLogin = nomes.indexOf(nomeExcluir);
                /*Com esse indice que eu consegui encontrar consigo excluir a parte do login e da senha
                por ter o indice de ambas. Mas ainda estou pensando em como fazer isto. */
                senhas[indiceExcluirLogin] = null;
                nomes[indiceExcluirLogin] = null;
                /*Consegui desenvolver a resposta acima. */
            }else alert(`O login ${nomeExcluir} não foi encontrado, se ainda deseja a exclusão, repita o processo e digite o usuário correto.`);

            /*O bloco de código abaixo pensei em um sistema de encontrar o null, ou seja um valor indefinido, onde o if abaixo sempre dispara
            e caso tenha algum elemento null em um dos arrays ele vai receber o valor do próximo indice do array, ou seja, se tiver um
            null na posição 1, logo que disparar esse if, o valor do elemento de indice 2 vai ir para o indice 1. Caso não tenha nenhum valor 
            encontrado de null ele vai sair do if pois, ao fim dele o booleano = false. */
            if(booleano === true){
                let indiceNullNomes = nomes.indexOf(null);
                let indiceNullSenhas = senhas.indexOf(null);
                nomes[indiceNullNomes] = nomes[indiceNullNomes + 1];
                senhas[indiceNullSenhas] = senhas[indiceNullSenhas + 1];
                booleano = false;
            }

            /*O bloco de código acima funciona a lógica, ou seja, ele funciona a ideia de receber
            o próximo valor do array, mas ele repete, ou seja, ele está excluindo o valor certinho
            mas quando o null vai receber a próxima posição ele recebe e não exclui a posição do valor 
            que ficou, ou seja, se eu querer excluir meu login patricio2132[0] vai receber(null) e o 
            código identifica se há algum null no array, caso tenha ele procura o próximo elemento do
            indice e o coloca na posição do null, ou seja, caso o próximo elemento seja policial2132[1]
            o elemento policial2132[1] vai para a posição [0], mas não exclui onde ele estava antes
            posição [1], então ele acaba repetindo o login e a senha nas posições [0] e [1] :( */

            console.log("Os logins armazenados no final das operações foram: " + nomes);
            console.log("As senhas armazenadas no final das operações foram: " + senhas);
            break;

            /*Código funcionando, mas tem alguns problemas de lógica a serem resolvidos! (case "excluir") */

//-------------------------------------------------------------------------------------------------------------------

            default:
                alert("Você não digitou nenhuma das nossas opções de ação, mesmo assim obrigado pela preferência! :)");
                break;
    }
    resposta = prompt("Deseja fazer mais alguma operação? [Sim/Não]");
}while(resposta !== "Não");

/*O CÓDIGO ESTÁ PRATICAMENTE TERMINADO, PARA O QUE O EXERCICIO PEDIA E UMAS COISINHAS A MAIS, MAS PRECISA DE OTIMIZAÇÃO E OUTRAS CONFIGURAÇÕES
PARA ISSO DEIXO COM QUE MEU EU DO FUTURO VENHA QUANDO PRECISAR DESSE CÓDIGO NOVAMENTE! */