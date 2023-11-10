/*
1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 
2 - Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.
   *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 
    IMC = peso / (altura x altura)
3 - Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá 'nome', você tem 'idade' anos, nasceu em 'ano', tem 'altura' de altura, pesa 'peso'kg seu IMC é 'imc' Kg/m2"  */

//RESPOSTAAA!!!
let nomeDoUsuario = prompt("Digite seu nome: ");//Pergunta ao usuário seu nome e armazena na váriavel
let idadeDoUsuario = Number(prompt("Digite sua idade: "));//Pergunta ao usuário sua idade e armazena na váriavel
let alturaDoUsuario = Number(prompt("Digite sua altura: "));//Pergunta ao usuário sua altura e armazena na váriavel
let pesoDoUsuario = Number(prompt("Digite seu peso: "));//Pergunta ao usuário seu peso e armazena na váriavel

let anoDoUsuario = 2023 - idadeDoUsuario;//Faz o calculo do ano que nasceu baseado na resposta dada na idade

let imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);//Calcula o IMC beseado na altura e peso do usuário

console.log(`Olá ${nomeDoUsuario}, você tem ${idadeDoUsuario}, nasceu em ${anoDoUsuario}, tem ${alturaDoUsuario}, pesa ${pesoDoUsuario}kg, seu IMC é de ${imcDoUsuario} Kg/m²`)
//Printa no console o resultado de tudo