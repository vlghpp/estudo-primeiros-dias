/*      Você deve criar um sistema de reservas para um hotel:


    - Um hotel deve possuir: id, nome, categoria, endereço e telefone;

    - Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e dia de saída;

1 - Crie 2 arrays, um para guardar hotéis e um para reservas

2 - Crie funções para cadastrar um hotel e uma reserva;

3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as seguintes informações: 
nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída

4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída

5 - Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas;

6 - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria;

7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número 
recebido;

8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.


Regras:

O id não pode ser igual a nenhum outro já existente;
O dia de entrada não pode ser maior que o de saída;
No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o cadastro de um hotel que não esteja no sistema;


ideia de resolução: a primeira coisa que pensei foi fazer um prompt perguntando o que ele deseja fazer, assim, podemos identificar no nosso
algoritmo as funções e correlacionar com um while e um switch case. Dentro desse switch case podemos fazer os casos e dentro dos casos as 
respectivas funções que devem desencadear o algoritmo. 

três opções: cadastrar um hotel, cadastrar uma reserva, consultar reservas(usando id do hotel[prompt perguntando pro usuário]).

para mostrar todas reservas é só fazer um for passando por todos elementos, da forma que o exercicio pede.




*/

let respostaUsuario = prompt("O que deseja realizar no nosso sistema:  [Cadastrar Hotel, Cadastrar Reserva, Consultar ou Sair]").toUpperCase();
let idHoteis = 0;
function cadastrarHotel(){
    let arrayHoteis = [

    ];
    let cadastroDoHotel = prompt("Qual o nome do hotel que você quer cadastrar?");
    arrayHoteis.push([`${cadastroDoHotel}: `])
    idHoteis++; //Provavelmente vai dar erro aqui, pois o id vai começar com 1 e não com 0
    return arrayHoteis;
}


/*ideia: fazer um array multidimensional, dessa forma consigo cadastrar o nome do hotel e dar um push
na função do cadastrarReserva para o hotel em especifico, talvez fazendo uma outra função de procurar
o hotel especifico. Exemplo:

arrayHoteis = [
    ['Hotel 1':, <<<aqui vem as reservas com o push>>>],
    ['Hotel 2':, <<<aqui vem as reservas com o push>>>]
]
dúvida: mas como fazer com que a reserva vá para o hotel certo? 

let nomeCliente = prompt("Qual é seu nome? ")
let diaEntrada = prompt("Qual é a data de entrada da reserva? ")
let diaSaida = prompt("Qual é a data de saida da reserva? ")
let nomeDoHotel = prompt("Qual é o nome do hotel que você quer fazer a reserva?");

for(let c = 0; c < arrayHoteis.length; c++){
    let procuraHotel = arrayHoteis[c].indexOf(`${nomeDoHotel}`)
    if(procuraHotel == 0;){
        arrayHoteis[c].push([`${nomeCliente}`, `${diaEntrada}`, `${diaSaida}`])
    }else{
        alert("[ERRO] O hotel desejado não se encontra entre nossos clientes.")
    }

}




*/
function cadastrarReserva(){

}

let arrayHoteis = cadastrarHotel();

console.log(arrayHoteis)






while(true){
    switch (respostaUsuario) {
        case "CADASTRAR HOTEL":
            
        break;
        
        case "CADASTRAR RESERVA":

        break;

        case "CONSULTAR":

        break;

        default:
            alert("Opção inválida. Tente Novamente!")
            break;
    }

    if (respostaUsuario == "SAIR"){
        break;
    }
}