let nomeDoUsuario = prompt("Digite seu nome: ");//Pergunta ao usuário seu nome e armazena na váriavel
let idadeDoUsuario = Number(prompt("Digite sua idade: "));//Pergunta ao usuário sua idade e armazena na váriavel
let alturaDoUsuario = Number(prompt("Digite sua altura: "));//Pergunta ao usuário sua altura e armazena na váriavel
let pesoDoUsuario = Number(prompt("Digite seu peso: "));//Pergunta ao usuário seu peso e armazena na váriavel

let anoDoUsuario = 2023 - idadeDoUsuario;//Faz o calculo do ano que nasceu baseado na resposta dada na idade

let imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);//Calcula o IMC beseado na altura e peso do usuário

console.log(`Olá ${nomeDoUsuario}, você tem ${idadeDoUsuario}, nasceu em ${anoDoUsuario}, tem ${alturaDoUsuario}, pesa ${pesoDoUsuario}kg, seu IMC é de ${imcDoUsuario} Kg/m²`)
//Printa no console o resultado de tudo