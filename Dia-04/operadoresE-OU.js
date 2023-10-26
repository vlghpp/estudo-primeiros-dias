let idadeUsuario = Number(prompt("Insira sua idade: "));//Pede ao usuario na forma de prompt sua idade
let nomeUsuario = prompt("Insira seu nome: ");//Pede ao usuario na forma de prompt seu nome

if(idadeUsuario === 23 && nomeUsuario === "Henrique"){//Define a condição para quando a idade E o nome forem 23 e Henrique
    console.log("Seu nome é Henrique e sua idade é 23");//Caso a condição seja verdadeira retorna está mensagem
}
else if(idadeUsuario === 23 || nomeUsuario === "Henrique"){//Define outra condição caso a primeira seja falsa
    //nesta condição ele define para idade 23 OU nome Henrique
    console.log("Seu nome é Henrique ou você tem 23 anos.");//Caso a condição seja verdadeira retorna está mensagem
}
else console.log("Seu nome não é Henrique e você não tem 23 anos.");//Caso nenhuma das duas condições acima seja 
//verdadeira ele retorna essa mensagem, pois quando ele não é 23 e Henrique ao mesmo tempo, tem chance de ser
//pelomenos um dos dois ou 23 ou Henrique, então caso não seja nenhum dos dois também, podemos concluir que o
//nome e a idade deste usuário não é Henrique e também não tem 23 anos